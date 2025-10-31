## Purpose

This repository is a minimal static frontend (single HTML page + small JS files). These instructions give an AI coding agent the exact, discoverable knowledge needed to make safe, useful edits without guessing project conventions.

## Big picture

- Single-page static site: `index.html` is the entry point. No build system, no bundler, no package.json.
- JavaScript is split into small files used as independent exercises: `homework12_1.js`, `homework12_2.js`, `homework12_3.js`. The HTML currently includes `homework12_3.js` by default.

## File map (concrete)

- `index.html` — main page. Key elements:
  - `<ul id="todolist">` — example list container
  - `<form id="form">` and `<input id="input">` — form the scripts target
  - script tags at bottom (swap/comment to activate different `homework12_*.js`).
- `homework12_1.js` — stores a top-level `let link = ""` and has two click handlers: `#linkButton` prompts for a URL and `#moveButton` navigates via `window.location.href`.
- `homework12_2.js` — demonstrates event delegation: an event listener attached to `#buttons` checks `event.target.tagName === 'BUTTON'` and alerts the clicked button text.
- `homework12_3.js` — currently contains `const form = document.querySelector('form');` (starter for form handling).

## Conventions & patterns to follow

- DOM-first editing: scripts operate directly on elements by id or query selector. Use `id` selectors where present (e.g., `#form`, `#todolist`, `#buttons`).
- Event delegation is used for groups of buttons (see `homework12_2.js`). Prefer adding a single listener to a container rather than many per-button when appropriate.
- Small-file, single-responsibility: each `homework12_*.js` is a focused exercise. When adding features, create a new JS file and link it in `index.html` rather than lumping unrelated behavior together.
- Avoid introducing complex build tooling. Keep changes runnable by opening `index.html` in a browser or via a simple local static server.

## Concrete editing notes (examples)

- To hook form submission: `index.html` uses `<form id="form">` — prefer `document.getElementById('form')` or `document.querySelector('#form')` and call `e.preventDefault()` before processing input.
- To add/remove which exercise runs, edit `index.html` script tags (they are already commented/uncommented to switch between `homework12_1.js`, `homework12_2.js`, `homework12_3.js`).
- Example you can reference when changing behavior: in `homework12_2.js` the pattern is

  document.getElementById('buttons').addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') { /* ... */ }
  });

## Running & debugging

- No build step. Open `index.html` in your browser or run a simple server for proper file/URL behaviour:

  python3 -m http.server 8000

  Then open http://localhost:8000 in the browser.
- Use browser DevTools console and breakpoints. Add `console.log(...)` for quick checks.

## Tests & CI

- There are no automated tests or CI configured. Keep changes small and manually verify in-browser.

## Safety & best-guess policies for an AI agent

- Do not introduce new external network calls or packages without an explicit PR and rationale (this is a static exercise repo).
- Avoid global variables; if you must add state, scope it to a closure or an IIFE/module pattern.
- When changing `index.html`, maintain the simple structure so non-build static serving still works.

## When to ask the repo owner

- If you propose adding a bundler, test framework, or external dependency.
- If a feature requires persistent storage, authentication, or backend integration.

---
If any part of this is unclear or you'd like a more opinionated developer workflow (e.g., add a simple test harness or Live Server config), tell me which direction and I will update this file.
