# Folder Structure

Organised files make verification fast and painless. Use this structure as your blueprint.

## Standard Layout

```markdown
Team-Name/
  index.html
  assets/
    images/
    audio/
    fonts/
    data/
  scripts/
  styles/
  README.md
  LICENSE (optional)
```

## Tips

- Keep scripts and styles inline if you prefer, but subfolders help larger teams stay tidy.
- Use descriptive filenames: `player-sprite.png`, `context-data.json`.
- Delete unused assets before zipping to save space.

## README Template

```markdown
# Game Title

## Team
- PLACEHOLDER names

## How to Play
- Controls
- Win condition
- AI concept explained

## Credits & Licences
- Assets
- Tools
- Mentors
```

## Verification Checklist

- No hidden system files (e.g., `.DS_Store`).
- Paths are case-sensitive—test on another machine if possible.
- Zip extracts cleanly with the same structure.

Still unsure? Show your folder to a mentor during QA hour for a quick thumbs-up.
