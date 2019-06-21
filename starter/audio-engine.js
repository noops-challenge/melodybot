var defaultPosition = {
  absoluteStep: -1,
  measure: -1,
  step: -1,
  time: -1
};

var WebAudioCtor = window.AudioContext || window.webkitAudioContext;

function initializeFirstContext() {
  var desiredSampleRate = 44100;
  var context = createNewContext()

  // in iOS, need to set the sample rate after initializing a context
  // SEE: https://stackoverflow.com/questions/29901577/distorted-audio-in-ios-7-1-with-webaudio-api
  if (/(iPhone|iPad)/i.test(navigator.userAgent) && context.sampleRate !== desiredSampleRate) {
    var buffer = context.createBuffer(1, 1, desiredSampleRate)
    var dummy = context.createBufferSource()
    dummy.buffer = buffer
    dummy.connect(context.destination)
    dummy.start(0)
    dummy.disconnect()

    context.close() // dispose old context
    return createNewContext();
  }

  return context
}

function createNewContext() {
  return new WebAudioCtor();
}

var leaderTime = 0.25;

function AudioEngine(onStep) {
  var position = defaultPosition;
  var context = initializeFirstContext();
  var pattern;
  var context;
  var noteAtStep = {};
  var activeNoteAtStep = {};
  var playing = false;
  var synth;

  onStep = onStep || function() {}

  // Set the current pattern
  function setPattern(p) {
    pattern = p;
    noteAtStep = {}
    activeNoteAtStep = {};
    p.notes.forEach(function(n) {
      noteAtStep[n.start] = n;
      for (var i=n.start;i<n.start+n.duration;i++) {
        activeNoteAtStep[i]=n;
      }
    });
  }

  // Start playing at the specified tempo
  function start(beatsPerMinute) {
    if (playing) stop();

    // assume each step is a 16th note
    stepsPerSecond = beatsPerMinute / 60 * 4;
    context = createNewContext();
    synth = Synth(context);

    playing = true;
    scheduleSounds(getPosition(0));
    context.resume();

    onTick();
  }

  // Stop playing
  function stop() {
    playing = false;
    position = defaultPosition;

    context.suspend();
    context.close();
  }

  // invoked continuously, detects when it is a new step
  function onTick() {
    currentStepAbsolute = getStepAbsolute(context.currentTime);

    // are we on a new step?
    if (currentStepAbsolute !== position.absoluteStep) {
      setCurrentStepAbsolute(currentStepAbsolute);
    }
    if (playing) {
      // do it again on the next frame
      requestAnimationFrame(onTick);
    }
    else {
      position = defaultPosition;
    }
  }

  // time in seconds (as reported by the audio context) -> song position
  function getStepAbsolute(timing) {
    return Math.floor((timing - leaderTime) * stepsPerSecond);
  }

  function setCurrentStepAbsolute(absoluteStepCount) {
    // schedule the sounds one beat ahead so the timing is exact
    scheduleSounds(getPosition(absoluteStepCount + 1));
    onStep(getPosition(absoluteStepCount));
  }

  // given a step, figure out what step it is and the absolute timing for it
  function getPosition(absoluteStepCount) {
    var stepCount = pattern.stepCount;
    return {
      measure: Math.floor(absoluteStepCount / stepCount),
      step: absoluteStepCount % stepCount,
      timing: getAbsoluteTime(absoluteStepCount),
      absoluteStep: absoluteStepCount
    }
  }

  // song position => time in seconds
  function getAbsoluteTime(absoluteStep) {
     return absoluteStep / stepsPerSecond + leaderTime;
  }

  function scheduleSounds(position) {
    if (!playing) return;

    // do we have a note to play?
    var note = noteAtStep[position.step];

    if (note) {
      // figure out end time
      var endTime = getAbsoluteTime(position.absoluteStep + note.duration );
      synth.play(note, position.timing, endTime);
    }
  }

  return {
    start,
    stop,
    setPattern

  }
}
