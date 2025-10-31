# Performance & Packaging

Smooth performance keeps judges smiling and players learning. Use these tips to keep your build lean, responsive, and quick to hand in.

## Optimise assets

- Keep your zipped submission **under 25 MB**—delete drafts or unused media before exporting.
- Resize images to the exact dimensions you need and export as WebP or efficiently compressed PNG/JPEG.
- Trim audio loops to 15–30 seconds, convert to `.mp3` or `.ogg`, and fade tails so loops feel seamless.

## Efficient code

- Use `requestAnimationFrame` for smooth animations and clear timers when scenes change.
- Batch DOM updates or state changes rather than editing elements in tight loops.
- Memoise expensive calculations or pre-generate data before gameplay begins.

## Bundle everything locally

- Reference assets with relative paths (`./assets/...`) so they survive after zipping.
- Install third-party libraries locally or copy the compiled script into your project—no CDN links.
- If you use a build tool, check the `dist/` output for hashed filenames and update references before zipping.

## Pre-flight checks

- Open DevTools once to confirm there are **no** requests for API keys, analytics, or remote fonts.
- Test the exported build on a second machine to verify fonts and media still load.
- Watch memory usage during longer play sessions; reload if you spot runaway allocations.

## Backup plan

- Keep a copy of your final zip on a labelled USB stick plus the staging portal.
- Include a `README` with play instructions so judges know the intended flow.
- Store a spare copy in cloud storage in case your primary machine fails on demo day.

Need help slimming assets or tracing lag? Flag the debug squad at PLACEHOLDER support channel.
