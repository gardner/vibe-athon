---
title: Build Overview
description: Grab the starter kit, follow proven prompt workflows, and spin up your game in hours.
outline: deep
---

![Build section banner](/build-section-banner.webp)

## Build Overview

Everything you need to go from blank page to playable vibe-coded game lives here. Start by downloading the right starter kit, then follow the prompt cookbook and workflow playbooks that match your team’s style.

## Starter kit menu {#starter-kit}

Pick a ZIP that matches your comfort level. Each bundle includes `README.md`, `CONSTRAINTS.md`, `WORKFLOWS.md`, a `context/` folder with prompt stubs, and an `assets/` folder with starter art.

| Kit | What’s inside | Ideal for |
| --- | --- | --- |
| **Beginner — `starter-beginner.zip`** | Single `index.html` with inline styles and comments pointing to editable sections. | First-time coders collaborating with an LLM in the browser. |
| **Intermediate — `starter-intermediate.zip`** | `index.html` + `styles.css` with progressive enhancement tips and no build tooling. | Makers who want tidy CSS but still ship a single file at the end. |
| **Advanced — `starter-advanced-react.zip`** | Lightweight React + WebGPU/WebLLM example with notes on exporting to a flat HTML file. | Experienced devs experimenting off-competition while keeping within the spirit of the rules. |

📌 **Reminder:** Only single-file (`index.html`, ≤2 MB, inline CSS/JS, no external network calls) submissions are eligible for judging. The advanced kit is opt-in and showcase-only.

## Prompt cookbook

Reuse these copy-pastable recipes to steer your AI buddy:

- **One-shot bootstrap.** Generate a playable single-file HTML game that fits the Vibe-athon constraints.
- **Tweak without regressions.** Ask for incremental updates that preserve existing IDs, functions, and styles.
- **Paste constraints first.** Start every conversation with your `CONSTRAINTS.md` so the model honours the rules.
- **Context folder pattern.** Stack snippets from `context/`—mechanics, assets, copy—and add a focused ask at the end.

## Workflow playbooks

Choose the setup that matches your hardware and teamwork style:

- **Browser-only loop.** ChatGPT, Gemini, or Claude in the browser → copy/paste into the starter file → refresh.
- **Editor + AI pair.** VS Code with Cursor, Copilot, or Codium → Live Server preview → commit frequent checkpoints.
- **Repo-first.** GitHub repo + PRs reviewed with Cursor/Codium → merge → export final single-file build.

Each playbook is mirrored in the starter kit `WORKFLOWS.md` so everyone can stay in sync—even offline.

## Tools & local setup

- Free first: CodeSandbox, Replit, VS Code, Vite’s Live Server, Firefox/Chrome dev tools.
- Bring your own LLM logins or tap the NAIS AI Sandbox accounts on-site (details in `README.md`).
- Quick preview: run a local server or open the HTML file directly; keep DevTools’ Lighthouse and Accessibility tabs handy.

## Inspiration gallery

Spark ideas with 20 one-liner concepts (hidden in `context/ideas.md`) and three runnable examples from past Vibe-athon experiments. Remix, mash-up, or use them as warm-up prompts before the sprint.

## What’s next

- [Technical Brief](/build/technical-brief)
- [Quickstart – Vanilla JS](/build/quickstart-vanilla)
- [Accessibility Basics](/build/accessibility-basics)
- [Submission checklist](/ship/qa-checklist)
