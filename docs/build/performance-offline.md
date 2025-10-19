# Performance & Offline

Smooth performance keeps judges smiling and players learning. These tips ensure your game stays fast and reliable—even when the Wi-Fi takes a nap.

## Optimise Assets

- Keep your total package under PLACEHOLDER MB.
- Resize images to the exact dimensions you need and export as WebP or compressed PNG.
- Trim audio loops to 15–30 seconds and fade them cleanly.

## Efficient Code

- Use requestAnimationFrame for smooth animations.
- Clean up timers, intervals, and event listeners when you change scenes.
- Avoid heavy computations in tight loops; pre-calc where possible.

## Offline Readiness

- Bundle libraries locally—no CDN links or remote fonts.
- Reference assets with relative paths (`./assets/...`).
- Test in airplane mode after every major change.

## Debugging Checklist

- Open DevTools and look for 404 errors in the console.
- Monitor network tab (once, while online) to confirm no external calls remain.
- Profile performance if you notice stutter—check for large images or repeated DOM updates.

## USB Survival Tips

- Keep a copy of your final zip on a labelled USB stick.
- Include a `README` with play instructions so judges know exactly what to expect.
- Store a backup on the staging server and one offline in case hardware fails.

Need help slimming assets or tracing lag? Flag the debug squad at PLACEHOLDER support channel.
