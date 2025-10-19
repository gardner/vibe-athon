# AI Audio & Music

Sound brings your game to life. Here’s how to craft a soundtrack that supports learning without overwhelming your players.

## Choose Your Tools

- Use PLACEHOLDER music generation tool for quick loops.
- Try Suno or Tone.js for dynamic soundscapes.
- Record simple effects with your phone and clean them in Audacity.

## Build a Sound Palette

- Create a calm background loop for gameplay.
- Add short stingers for success, failure, or new knowledge moments.
- Keep file sizes small—OGG or MP3 at 128 kbps is usually enough.

## Integrate Offline

```js
const audio = new Audio('./assets/audio/loop.ogg')
audio.loop = true
audio.volume = 0.4
document.querySelector('#toggle-audio').addEventListener('click', () => {
  if (audio.paused) {
    audio.play()
  } else {
    audio.pause()
  }
})
```

Always provide a mute toggle and remember browsers require user interaction before playback.

## Accessibility & Inclusivity

- Avoid sudden loud sounds—start soft and build up.
- Provide captions or text cues for players who play muted.
- Offer an alternate “quiet mode” if your game is dialogue-heavy.

## Credits & Licences

- Track every source in a PLACEHOLDER audio log.
- Check licence terms for AI-generated music—some tools require attribution.
- Credit collaborators in your submission notes.

Need mastering help? Visit the audio corner in the mentor area for quick feedback.
