# Technical Requirements

Use this checklist as the single source of truth for what every Vibe-athon submission must include. Share it with your whole team so the build, polish, and hand-in phases all follow the same constraints.

## Submission package

- **Deliverable:** One ZIP file named `team-name.zip` containing your project folder.
- **Entry point:** `index.html` lives at the root of the folder you zip.
- **Structure:** Additional assets (scripts, images, audio, fonts) live in subfolders alongside `index.html`.
- **Static only:** Everything must run in a browser with no backend servers, build steps, or environment variables required at judging time.

## Allowed tech

- You can start from any official starter kit (vanilla HTML, p5.js, Twine, or React). If you use a build tool (like Vite or React), include the generated `dist/` output and make sure `index.html` can run by double-clicking it.
- Standalone libraries are welcome if they’re bundled locally. Use relative paths (`./assets/...`) instead of CDN URLs.
- Prefer open formats (`.webp`, `.mp3`, `.json`) so judges don’t need extra codecs.

## Network & API usage

- Your game should boot with a regular internet connection, but it must **not** depend on third-party APIs that require keys, auth tokens, or organiser-managed credentials.
- Anonymous public APIs are okay if they degrade gracefully. If the call fails, the core experience should still work.
- No background data collection or analytics pixels.

## Size & performance guardrails

- Keep the zipped submission **under 25 MB**. Aim for ≤10 MB so uploads are fast.
- Optimise media: resize images, compress audio, and trim unused assets before you zip.
- Avoid long-running loops or unthrottled timers that could freeze the tab during demos.

## Naming & documentation

- Use lowercase, hyphenated folder names: `team-name/index.html`.
- Include a short `README.md` covering controls, learning goals, credits, and any generation tools you used.
- Licence any third-party assets you bundle and mention them in the README.

## Testing expectations

- Smoke-test the exported build on at least one other machine.
- Verify links, image paths, and fonts work after you zip the project.
- Run through the [QA checklist](/ship/qa-checklist) before heading to the submission desk.

Keep this page bookmarked—other handbook sections link back here instead of restating the rules. When in doubt, follow this document.
