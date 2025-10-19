# Troubleshooting

Hit a snag? Use this friendly guide to get unstuck fast.

## Game Won’t Load

- Double-check file paths—remember they’re case-sensitive.
- Ensure `index.html` is in the root folder.
- Open DevTools and look for 404 or JavaScript errors.
- Ask the debug squad at PLACEHOLDER desk if you’re still stuck.

## Audio Isn’t Playing

- Make sure the file path is correct and format is supported (`.ogg` or `.mp3`).
- Start playback after a user interaction (e.g., button click).
- Check browser autoplay settings in the offline kit instructions.

## Keyboard Input Fails

- Confirm the canvas or main element has focus.
- Use `event.key` in lowercase for consistency.
- Add a focus outline so players know where they are.

## Performance Issues

- Compress large images or audio files.
- Limit expensive calculations inside loops.
- Use `requestAnimationFrame` instead of `setInterval` for rendering.

## Version Chaos

- Keep a changelog in PLACEHOLDER shared doc.
- Zip working builds as checkpoints before big changes.
- Assign one person to manage the final submission folder.

Still stuck? Breathe, hydrate, and call over a mentor. We love a good puzzle.
