# Quickstart – Vanilla JS

Want total control with zero dependencies? This vanilla HTML/CSS/JS starter helps you spin up a clean, extensible game loop that exports without surprises.

## Setup

1. Copy the PLACEHOLDER vanilla starter into your project folder.
2. Open `index.html` in your browser and confirm you see the base UI.
3. Review `game.js` to understand the state machine (`init`, `play`, `results`).

## Core Structure

```js
const game = {
  state: 'init',
  score: 0,
  start() {
    this.state = 'play'
  },
  update(delta) {
    // PLACEHOLDER update logic
  }
}
```

- Use `requestAnimationFrame` or a fixed interval loop for updates.
- Keep input listeners in `input.js` so you can swap controls easily.
- Store UI helpers in `ui.js` so you can adjust overlays and HUD copy quickly.

## Teaching AI Concepts

- Show data flowing through stages (ingest → train → evaluate).
- Provide player feedback when they surface bias or hallucinations.
- Use overlays to explain why the “AI” made a certain move.

## AI Assist Prompts

> “You are a JavaScript gameplay programmer. Add a finite state machine with states `tutorial`, `play`, and `summary` to this base loop: PLACEHOLDER code snippet.”

## Packaging Must-Dos

- Inline critical CSS in `<style>` and load scripts with relative paths.
- Use the `assets/` directory for images, audio, and JSON data.
- Remove any API keys or analytics before exporting; the build should boot without credentials.

## Pre-Submission Checks

- Run the [QA checklist](/ship/qa-checklist) and [folder structure guide](/ship/folder-structure).
- Zip the folder, unzip it somewhere else, and re-test before hand-in.
- Capture a PLACEHOLDER screenshot for your submission form.

The vanilla path is powerful—keep it modular, keep it inclusive, and you’ll fly.
