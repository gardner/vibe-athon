# Common Patterns

These copy-pasteable patterns cover the essentials of interactive storytelling and gameplay. Use them as-is or tweak them to fit your game’s personality.

## Timers & Cooldowns

```js
let remaining = 60
const timer = setInterval(() => {
  remaining -= 1
  updateTimerUI(remaining)
  if (remaining <= 0) {
    clearInterval(timer)
    endRound()
  }
}, 1000)
```

Add audio or visual cues when the timer is low to keep players engaged.

## Keyboard Input

```js
const keys = {}
window.addEventListener('keydown', (event) => {
  keys[event.key.toLowerCase()] = true
})
window.addEventListener('keyup', (event) => {
  keys[event.key.toLowerCase()] = false
})
```

Check `keys['a']` or `keys['arrowleft']` inside your update loop for movement or prompts.

## Scene Switching

```js
function goToScene(name) {
  document.querySelectorAll('[data-scene]').forEach((scene) => {
    scene.hidden = scene.dataset.scene !== name
  })
}
```

Use this pattern to swap between tutorial, gameplay, and recap screens without reloading.

## Data Cards

```html
<div class="card" role="group" aria-labelledby="card-title">
  <h3 id="card-title">Bias Alert</h3>
  <p>PLACEHOLDER message about how training data affects outcomes.</p>
</div>
```

Combine visual highlights with friendly explanations to teach AI concepts as players progress.

## Accessibility Callouts

- Use `aria-live="polite"` for dynamic score updates.
- Ensure focus order flows logically for keyboard-only play.
- Provide captions or transcripts for any PLACEHOLDER video content.

Need another snippet? Ask the mentor desk or share a request in PLACEHOLDER community chat.
