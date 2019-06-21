
## melodybot API


### get a random melody

`GET https://api.noopschallenge.com/melodybot/random`

`HTTP 200`

```
{
  "generator": "chaos",
  "stepCount": 32,
  "key": {
    "name": "A Major", "root": "A", "relativeMajorRoot": "A", "type": "major"
  },
  "notes": [
    {
      "start": 0,
      "duration": 2,
      "value": 64,
      "name": "E4",
      "noteName": "E",
      "octave": 4,
      "frequency": 329.6275569128699
    },
    {
      "start": 2,
      "duration": 1,
      "value": 59,
      "name": "B3",
      "noteName": "B",
      "octave": 3,
      "frequency": 246.94165062806206
    },
    {
      "start": 17,
      "duration": 4,
      "value": 74,
      "name": "D5",
      "noteName": "D",
      "octave": 5,
      "frequency": 587.3295358348151
    },
    {
      "start": 25,
      "duration": 4,
      "value": 62,
      "name": "D4",
      "noteName": "D",
      "octave": 4,
      "frequency": 293.6647679174076
    },
    {
      "start": 29,
      "duration": 2,
      "value": 57,
      "name": "A3",
      "noteName": "A",
      "octave": 3,
      "frequency": 220
    },
    {
      "start": 31,
      "duration": 1,
      "value": 57,
      "name": "A3",
      "noteName": "A",
      "octave": 3,
      "frequency": 220
    }
  ]
}
```


### specify key

`GET https://api.noopschallenge.com/melodybot/random?key=A%20Minor`

`HTTP 200`

```
{
  "generator": "chaos",
  "stepCount": 32,
  "key": {
    "name": "A Minor", "root": "A", "relativeMajorRoot": "C", "type": "minor"
  },
  "notes": [
    {
      "start": 0,
      "duration": 2,
      "value": 60,
      "name": "C4",
      "noteName": "C",
      "octave": 4,
      "frequency": 261.6255653005986
    },
    {
      "start": 2,
      "duration": 2,
      "value": 67,
      "name": "G4",
      "noteName": "G",
      "octave": 4,
      "frequency": 391.99543598174927
    },
    {
      "start": 4,
      "duration": 2,
      "value": 57,
      "name": "A3",
      "noteName": "A",
      "octave": 3,
      "frequency": 220
    },
    {
      "start": 6,
      "duration": 1,
      "value": 65,
      "name": "F4",
      "noteName": "F",
      "octave": 4,
      "frequency": 349.2282314330039
    },
    {
      "start": 7,
      "duration": 2,
      "value": 62,
      "name": "D4",
      "noteName": "D",
      "octave": 4,
      "frequency": 293.6647679174076
    },
    {
      "start": 9,
      "duration": 1,
      "value": 71,
      "name": "B4",
      "noteName": "B",
      "octave": 4,
      "frequency": 493.8833012561241
    },
    {
      "start": 10,
      "duration": 4,
      "value": 69,
      "name": "A4",
      "noteName": "A",
      "octave": 4,
      "frequency": 440
    },
    {
      "start": 14,
      "duration": 2,
      "value": 62,
      "name": "D4",
      "noteName": "D",
      "octave": 4,
      "frequency": 293.6647679174076
    },
    {
      "start": 20,
      "duration": 2,
      "value": 77,
      "name": "F5",
      "noteName": "F",
      "octave": 5,
      "frequency": 698.4564628660078
    },
    {
      "start": 22,
      "duration": 4,
      "value": 60,
      "name": "C4",
      "noteName": "C",
      "octave": 4,
      "frequency": 261.6255653005986
    }
  ]
}
```


### get available Melodybot generators

`GET https://api.noopschallenge.com/melodybot/generators`

`HTTP 200`

```
[
  { "name": "chaos", "description": "Chaotic Neutral Melody Generator" },
  { "name": "arpeggio", "description": "Generate Arpeggios" },
  { "name": "walk", "description": "Random Walk" }
]
```


### specify chaos generator

`GET https://api.noopschallenge.com/melodybot/random?generator=chaos`

`HTTP 200`

```
{
  "generator": "chaos",
  "stepCount": 32,
  "key": {
    "name": "F Major", "root": "F", "relativeMajorRoot": "F", "type": "major"
  },
  "notes": [
    {
      "start": 0,
      "duration": 2,
      "value": 58,
      "name": "Bb3",
      "noteName": "Bb",
      "octave": 3,
      "frequency": 233.08188075904496
    },
    {
      "start": 2,
      "duration": 4,
      "value": 53,
      "name": "F3",
      "noteName": "F",
      "octave": 3,
      "frequency": 174.61411571650194
    },
    {
      "start": 6,
      "duration": 2,
      "value": 64,
      "name": "E4",
      "noteName": "E",
      "octave": 4,
      "frequency": 329.6275569128699
    },
    {
      "start": 8,
      "duration": 2,
      "value": 58,
      "name": "Bb3",
      "noteName": "Bb",
      "octave": 3,
      "frequency": 233.08188075904496
    },
    {
      "start": 10,
      "duration": 2,
      "value": 72,
      "name": "C5",
      "noteName": "C",
      "octave": 5,
      "frequency": 523.2511306011972
    },
    {
      "start": 12,
      "duration": 2,
      "value": 72,
      "name": "C5",
      "noteName": "C",
      "octave": 5,
      "frequency": 523.2511306011972
    },
    {
      "start": 14,
      "duration": 2,
      "value": 53,
      "name": "F3",
      "noteName": "F",
      "octave": 3,
      "frequency": 174.61411571650194
    },
    {
      "start": 24,
      "duration": 2,
      "value": 76,
      "name": "E5",
      "noteName": "E",
      "octave": 5,
      "frequency": 659.2551138257398
    },
    {
      "start": 26,
      "duration": 2,
      "value": 74,
      "name": "D5",
      "noteName": "D",
      "octave": 5,
      "frequency": 587.3295358348151
    },
    {
      "start": 28,
      "duration": 4,
      "value": 57,
      "name": "A3",
      "noteName": "A",
      "octave": 3,
      "frequency": 220
    }
  ]
}
```


### specify walk generator

`GET https://api.noopschallenge.com/melodybot/random?generator=walk`

`HTTP 200`

```
{
  "generator": "walk",
  "stepCount": 32,
  "key": {
    "name": "Ab Major", "root": "Ab", "relativeMajorRoot": "Ab", "type": "major"
  },
  "notes": [
    {
      "start": 0,
      "duration": 2,
      "value": 67,
      "name": "G4",
      "noteName": "G",
      "octave": 4,
      "frequency": 391.99543598174927
    },
    {
      "start": 2,
      "duration": 2,
      "value": 65,
      "name": "F4",
      "noteName": "F",
      "octave": 4,
      "frequency": 349.2282314330039
    },
    {
      "start": 4,
      "duration": 2,
      "value": 61,
      "name": "Db4",
      "noteName": "Db",
      "octave": 4,
      "frequency": 277.1826309768721
    },
    {
      "start": 6,
      "duration": 2,
      "value": 58,
      "name": "Bb3",
      "noteName": "Bb",
      "octave": 3,
      "frequency": 233.08188075904496
    },
    {
      "start": 8,
      "duration": 2,
      "value": 60,
      "name": "C4",
      "noteName": "C",
      "octave": 4,
      "frequency": 261.6255653005986
    },
    {
      "start": 10,
      "duration": 2,
      "value": 61,
      "name": "Db4",
      "noteName": "Db",
      "octave": 4,
      "frequency": 277.1826309768721
    },
    {
      "start": 12,
      "duration": 2,
      "value": 65,
      "name": "F4",
      "noteName": "F",
      "octave": 4,
      "frequency": 349.2282314330039
    },
    {
      "start": 14,
      "duration": 2,
      "value": 67,
      "name": "G4",
      "noteName": "G",
      "octave": 4,
      "frequency": 391.99543598174927
    },
    {
      "start": 16,
      "duration": 2,
      "value": 68,
      "name": "Ab4",
      "noteName": "Ab",
      "octave": 4,
      "frequency": 415.3046975799451
    },
    {
      "start": 18,
      "duration": 2,
      "value": 73,
      "name": "Db5",
      "noteName": "Db",
      "octave": 5,
      "frequency": 554.3652619537442
    },
    {
      "start": 20,
      "duration": 2,
      "value": 72,
      "name": "C5",
      "noteName": "C",
      "octave": 5,
      "frequency": 523.2511306011972
    },
    {
      "start": 22,
      "duration": 2,
      "value": 73,
      "name": "Db5",
      "noteName": "Db",
      "octave": 5,
      "frequency": 554.3652619537442
    },
    {
      "start": 24,
      "duration": 2,
      "value": 75,
      "name": "Eb5",
      "noteName": "Eb",
      "octave": 5,
      "frequency": 622.2539674441618
    },
    {
      "start": 26,
      "duration": 2,
      "value": 73,
      "name": "Db5",
      "noteName": "Db",
      "octave": 5,
      "frequency": 554.3652619537442
    },
    {
      "start": 28,
      "duration": 2,
      "value": 68,
      "name": "Ab4",
      "noteName": "Ab",
      "octave": 4,
      "frequency": 415.3046975799451
    },
    {
      "start": 30,
      "duration": 2,
      "value": 65,
      "name": "F4",
      "noteName": "F",
      "octave": 4,
      "frequency": 349.2282314330039
    }
  ]
}
```


### specify arpeggio generator

`GET https://api.noopschallenge.com/melodybot/random?generator=arpeggio`

`HTTP 200`

```
{
  "generator": "arpeggio",
  "stepCount": 32,
  "key": {
    "name": "C Major", "root": "C", "relativeMajorRoot": "C", "type": "major"
  },
  "notes": [
    {
      "value": 52,
      "name": "E3",
      "noteName": "E",
      "octave": 3,
      "frequency": 164.81377845643496,
      "start": 0,
      "duration": 4
    },
    {
      "value": 48,
      "name": "C3",
      "noteName": "C",
      "octave": 3,
      "frequency": 130.8127826502993,
      "start": 4,
      "duration": 4
    },
    {
      "value": 52,
      "name": "E3",
      "noteName": "E",
      "octave": 3,
      "frequency": 164.81377845643496,
      "start": 8,
      "duration": 4
    },
    {
      "value": 55,
      "name": "G3",
      "noteName": "G",
      "octave": 3,
      "frequency": 195.99771799087463,
      "start": 12,
      "duration": 4
    },
    {
      "value": 59,
      "name": "B3",
      "noteName": "B",
      "octave": 3,
      "frequency": 246.94165062806206,
      "start": 16,
      "duration": 4
    },
    {
      "value": 55,
      "name": "G3",
      "noteName": "G",
      "octave": 3,
      "frequency": 195.99771799087463,
      "start": 20,
      "duration": 4
    },
    {
      "value": 52,
      "name": "E3",
      "noteName": "E",
      "octave": 3,
      "frequency": 164.81377845643496,
      "start": 24,
      "duration": 4
    },
    {
      "value": 48,
      "name": "C3",
      "noteName": "C",
      "octave": 3,
      "frequency": 130.8127826502993,
      "start": 28,
      "duration": 4
    }
  ]
}
```

