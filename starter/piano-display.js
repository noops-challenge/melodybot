// Render the Piano Keyboard and the dots that show the current step
function PianoDisplay(canvas) {
  var ctx = canvas.getContext('2d');
  var lineWidth;

  var usedNotes = {};

  return {
    setPattern,
    onStep,
    stop
  };

  function setPattern(p) {
    pattern = p;

    // store the used notes so we can highlight the keys
    usedNotes = {};
    pattern.notes.forEach(function(note) {
      usedNotes[note.value] = true;
      usedNotes[note.value] = true;
    });

    canvas.height = Math.min(window.innerHeight, 500);
  }

  function stop() {
    onStep({ step: -1});
  }

  function onStep(position) {
    // Constrain the canvas, etc. based on screen size
    canvas.width = Math.min(window.innerWidth, 1300);
    lineWidth = Math.max(2, canvas.width / 400);
    ctx.lineWidth = lineWidth;

    var octaveWidth = Math.min(canvas.width / 3 - lineWidth, 500);
    var center = canvas.width / 2 + lineWidth;
    var keyHeight = Math.min(400, octaveWidth / 1.5);

    // figure out if there is an active note so we can highlight it
    var activeNote = pattern.notes.filter(function(note) {
      return note.start <= position.step && (note.start + note.duration) > position.step;
    })[0];

    var activeNoteValue = activeNote && activeNote.value;

    // draw three octaves of keyboard since that is the range ot the Melodybot API
    drawOctave(48, center - octaveWidth * 1.5, octaveWidth, 0, keyHeight, activeNoteValue);
    drawOctave(60, center - octaveWidth * 0.5, octaveWidth, 0, keyHeight, activeNoteValue);
    drawOctave(72, center + octaveWidth * 0.5, octaveWidth, 0, keyHeight, activeNoteValue);

    // draw the progress steps
    drawSteps(pattern.stepCount, position.step, keyHeight + 35, center - octaveWidth * 1.5, octaveWidth * 3);
  }

  // Draw one octave of the keyboard:
  function drawOctave(root, left, width, step, height, activeNoteValue) {
    var noteWidth = width / 7;

    //  Each entry holds the white key in [0] and next black key in [1], if applicable
    var notes = [
      [root,     root + 1],     // C, C#/Db
      [root + 2, root + 3],     // D, D#/Eb
      [root + 4],               // E
      [root + 5, root + 6],     // ...etc.
      [root + 7, root + 8],
      [root + 9, root + 10],
      [root + 11]
    ];


    // Draw white keys
    for (var i = 0; i < 7; i++) {
      var value = notes[i][0];

      // highlight keys that are part of the melody
      ctx.strokeStyle = usedNotes[value] ? '#BB00BB': 'black';

      // fill key based on 1) is it active and 2) is it part of current melody
      ctx.fillStyle = value === activeNoteValue ? 'blue' : (usedNotes[value] ? 'white' : '#EEE');

      ctx.beginPath();
      ctx.rect(left + i * noteWidth, lineWidth, noteWidth - lineWidth, height - lineWidth);
      ctx.stroke();
      ctx.fill();

    }

    // draw black keys
    for (var i = 0; i < 7; i++) {
      if (notes[i][1]) {
        var value = notes[i][1];
        // highlight keys that are part of the melody
        ctx.strokeStyle = usedNotes[value] ? '#BB00BB': 'black';
        // fill key based on 1) is it active and 2) is it part of current melody
        ctx.fillStyle = value === activeNoteValue ? 'blue' : (usedNotes[value] ?  '#550055' : '#222');

        ctx.beginPath();
        ctx.rect(left + ((i + 0.7) * noteWidth), lineWidth, noteWidth * 0.6, height * 0.6);
        ctx.stroke();
        ctx.fill();
      }
    }
  }

  // draw the dots that represent the current step and the progress through the pattern
  function drawSteps(count, current, top, left, width) {
    ctx.strokeStyle = 'black';
    var radius = width / count / 3;

    var vcenter = top;

    for (var i =0; i < count; i++) {
      var hcenter = left + ((i + 0.5) * width / count);
      ctx.beginPath();
      ctx.arc(hcenter, vcenter, radius, 0, 2 * Math.PI, false);

      if (current === i) {
        ctx.fillStyle = '#BB00BB';
        ctx.fill();
      }
      ctx.stroke();
    }
  }
}
