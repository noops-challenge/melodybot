// Synthesizer -- plays notes at specific frequencies and times
function Synth(context) {

  // all output goes through a master gain node
  //
  // This is the place to add a global volume control or attach other nodes
  // to do processing of all of the synth sounds in one place.
  var masterGain = context.createGain();

  //start silent and ramp up
  masterGain.gain.setValueAtTime(0.001, context.currentTime);
  masterGain.gain.exponentialRampToValueAtTime(0.1, context.currentTime + 0.02);
  masterGain.connect(context.destination);

  // set up three panned delay effects that we will route our synth
  // sounds through.

  // Try playing with the delay times or the pan value
  var delay1 = createDelay(0.20, 0.2, -0.5, masterGain);
  var delay2 = createDelay(0.23, 0.2, 0, masterGain);
  var delay3 = createDelay(0.17, 0.2, 0.5, masterGain);

  // create a delay -- an echo effect -- and return a reference to it
  function createDelay(delaySeconds, feedbackAmount, pan, destination) {
    // "gracefully" degrade
    if (!context.createDelay) return destination;

    // This delay looks like:
    //
    // (input)-->(front)------>(pre)---->(destination)
    //               |                         ^
    //               |                         |
    //               |      (feedback)----->(panner)
    //               |        ^  |
    //               |        |  v
    //               *------>(delay)

    // the "front": the input that splits to the delay line and the pre
    var front = context.createGain();

    // "pre" - the clean, unaffected signal
    var pre = context.createGain();

    // delay that holds its input for delaySecods then outputs it
    var delay = context.createDelay();
    delay.delayTime.value = delaySeconds;

    // feedback creates repeating echoes
    var feedback = context.createGain();
    feedback.gain.value = feedbackAmount;


    // the "dry" output
    front.connect(pre);
    pre.connect(destination);

    // the "wet" side
    front.connect(delay);
    delay.connect(feedback);
    feedback.connect(delay);

    // pan (move in the stereo field) -- negative values are left, positive are right
    if (pan && context.createStereoPanner) {
      var panner = context.createStereoPanner();
      panner.pan.setValueAtTime(pan, context.currentTime);
      feedback.connect(panner);
      panner.connect(destination);
    }
    else {
      feedback.connect(destination);
    }

    // return the frontend to be used as destination for other nodes
    return front;
  }

  // play a note on each of our voices
  function play(note, startTime, endTime) {

    // play three voices
    playSynth('square', note.frequency, startTime, endTime, delay1);

    // dividing frequency in half means "one octave down" in muisc speak
    playSynth('sine', note.frequency / 2, startTime, endTime, delay2);

    // Make this voice slightly sharp to give it some character.
    playSynth('triangle', note.frequency * 1.007, startTime, endTime, delay3);
  }

  // play a synth voice
  function playSynth(type, frequency, startTime, endTime, destination) {
    if (!frequency) throw 'wtf'
    var tail = 0.6;

    var oscillator = context.createOscillator();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, startTime); // value in hertz

    var gain = context.createGain();

    // start silent then quickly ramp up in 50 ms, then slightly down
    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.exponentialRampToValueAtTime(0.7, startTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.4, startTime + 0.1);

    // and fade out at the end
    gain.gain.setValueAtTime(0.4, endTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, endTime + tail);

    oscillator.connect(destination);

    oscillator.start(startTime);
    oscillator.stop(endTime + tail);
  }

  return { play };
}
