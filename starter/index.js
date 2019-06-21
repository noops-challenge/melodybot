//
// Entrypoint
//
//
var AudioEngine;
var pianoDisplay;

window.addEventListener('load', function() {
  document.getElementById('start').addEventListener('click', start);
  document.getElementById('stop').addEventListener('click', stop);
  document.getElementById('resume').addEventListener('click', resume);
  document.getElementById('refresh').addEventListener('click', startNewMelody);
});


// Fetch a new melody from Melodybot and start playing it
function start() {
  // the keyboard & step indicators
  pianoDisplay = PianoDisplay(document.getElementById('piano-display'));

  // when the audio engine triggers a new step, update piano display
  audioEngine = AudioEngine(pianoDisplay.onStep);
  startNewMelody();
}

// Start again with the same pattern
function resume() {
  setPhase('playing');
  audioEngine.start(120);
}

// Stop the audio engine
function stop() {
  setPhase('stopped');
  audioEngine.stop();
  pianoDisplay.stop();
}

function startNewMelody() {
  // fetch the melody data
  getJson('/melodybot/random' + window.location.search).then(
    function(pattern) {

      // update the key display
      document.getElementById('key-name').innerText = pattern.key.name;
      document.getElementById('generator-name').innerText = pattern.generator;

      // start up the engine
      setPhase('playing');
      audioEngine.setPattern(pattern);
      pianoDisplay.setPattern(pattern);
      audioEngine.start(120);
    },
    function(err) {
      document.getElementById('error-message').innerText = err.message;
      setPhase('error');
    }
  );
}

// Setting the phase shows/hides the dom elements that are
// relevant
function setPhase(phase) {
  var el = document.getElementById('melodybot');
  el.classList.remove('phase-starting');
  el.classList.remove('phase-playing');
  el.classList.remove('phase-stopped');
  el.classList.remove('phase-error');
  el.classList.add('phase-' + phase);
}

