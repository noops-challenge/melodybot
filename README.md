![Melodybot](https://user-images.githubusercontent.com/212941/60118757-d25cce80-9731-11e9-8d4e-4ccecdc71b5e.png)

## 👋 Hello from Melodybot

Meet Melodybot, Drumbot's cousin. Melodybot loves two types of things: APIs and [Keytars](https://en.wikipedia.org/wiki/Keytar).

Melodybot played lead and rhythm keytar in many bands during its heyday, but over time the keytar fell out of favor and gigs were fewer and farther between.

Seeking a career change, Melodybot enrolled in a coding bootcamp. Immediately upon graduation Melodybot went to work on creating this API to serve you hot keytar lines.

*Note: these melodies are also playable on other (not as cool) instruments.*

### API

Melody's API has the following endpoints:

`GET /melodybot/random`

This will return a new melody in a random key.

`GET /melodybot/generators`

Melodybot has a few different generators it uses to make melodies. This returns a list of them.

You can also specify the key and/or the generator for your melody:

`GET /melodybot/random?generator=arpeggio&key=D%20Minor`

Each melody is composed of a sequence of notes that each looks like:
```
  {
    "start": 0,                      // the step the note starts playing
    "duration": 2,                   // how many steps it plays for
    "value": 64,                     // the value of the note -- these numbers come from the MIDI standard
    "name": "E4",                    // Name of note + octave
    "noteName": "E",                 // Just the note name
    "octave": 4,                     // Just the octave. "C" is the lowest note of each octave
    "frequency": 329.6275569128699   // The frequency in Hz (cycles per second) of the note
  },
```

See the [API Documentation](./API.md) for more information.

## Starter kit

Melodybot has included a [starter kit](./starter) for you -- a synthesizer that runs in your browser.

[See it in action](https://noops-challenge.github.io/melodybot/starter)

This example requires WebAudio support,

The WebAudio API is relatively new and support can be slightly different in each browser. This drum machine should work on Edge, Firefox, Chrome, and Safari.  Also note that on some mobile devices, WebAudio only plays through headphones &ndash; so if you don't hear anything, plug some in!

The [WebAudio page on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) is a good place to start learning about the WebAudio API.

## Ideas to try

Here are a few ideas for you to try:

- **Change the sounds**: These sounds are pretty boring. Try experimenting with [oscillators](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode), [filters](https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode), [panners](https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode), and all of the other goodies in the WebAudio API. Check out (synth.js)[./starter/synth.js] for more information.

- **Change the speed and volume!**: This synthesizer doesn't let you set the tempo or turn it up or down. Try adding a tempo control and a volume knob.

- **Play multiple melodies at once**: The Melodybot API allows you to request a melody in a key of your preference. Try playing two melodies in the same key at the same time.

- **Integrate with Drumbot**: Start a bot band in your browser. Sync Melodybot and Drumbot together.

- **Spice up the design!**: Add your own flavor. Maybe mix in colors from Hexbot?

- **Add visualizations**: Use [AudioContext.createAnalyser](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createAnalyser) to analyze the audio data. Create a sound meter or do something else awesome!

- **Use a different programming language**: Most languages and platforms out there can play music, with a little help from a library or two. What's your favorite language?

## Show Melodybot what you made!

Push your work up to your own fork and tell us about it.

More about Melodybot here: https://noopschallenge.com/challenges/melodybot
