---
title: Persona Quiz
description: Answer a few quick questions to find your best-fit Vibe-athon path.
outline: deep
---

<!-- DESIGN TODO -->
**PLACEHOLDER: Quiz hero illustration or mascot**

# Persona Quiz

Take two minutes to discover which persona fits your energy today. Trust your instincts—there are no wrong answers, just clues about where you’ll have the most fun and impact.

<form id="persona-quiz">
  <ol>
    <li>
      When the team hits a blocker, you usually:
      <label><input type="radio" name="q1" value="prompt"> Ask an AI or chatbot for a clever workaround.</label>
      <label><input type="radio" name="q1" value="code"> Dive into the codebase and debug it yourself.</label>
      <label><input type="radio" name="q1" value="design"> Sketch a new flow or narrative that sidesteps the blocker.</label>
      <label><input type="radio" name="q1" value="data"> Translate the problem so everyone understands what’s really broken.</label>
      <label><input type="radio" name="q1" value="access"> Check whether the blocker impacts accessibility or inclusion.</label>
    </li>
    <li>
      Your favorite part of a hackathon is:
      <label><input type="radio" name="q2" value="prompt"> Rapid prototyping wild ideas with AI helpers.</label>
      <label><input type="radio" name="q2" value="code"> Optimizing systems until they run silky smooth.</label>
      <label><input type="radio" name="q2" value="design"> Crafting art, UI, or story moments that make people feel something.</label>
      <label><input type="radio" name="q2" value="data"> Turning messy research into clear insights for players.</label>
      <label><input type="radio" name="q2" value="access"> Making sure every player can interact comfortably.</label>
    </li>
    <li>
      Pick the task that sounds most energizing right now:
      <label><input type="radio" name="q3" value="prompt"> Refining prompts to coax better outputs from AI tools.</label>
      <label><input type="radio" name="q3" value="code"> Building or refactoring a gameplay system.</label>
      <label><input type="radio" name="q3" value="design"> Storyboarding the player journey and UI states.</label>
      <label><input type="radio" name="q3" value="data"> Writing copy that explains the "why" behind your mechanics.</label>
      <label><input type="radio" name="q3" value="access"> Auditing color contrast, captions, or control schemes.</label>
    </li>
    <li>
      What do teammates thank you for the most?
      <label><input type="radio" name="q4" value="prompt"> Finding unexpected shortcuts with automation.</label>
      <label><input type="radio" name="q4" value="code"> Shipping stable builds under pressure.</label>
      <label><input type="radio" name="q4" value="design"> Crafting experiences that feel cohesive and delightful.</label>
      <label><input type="radio" name="q4" value="data"> Making complex ideas feel simple and inviting.</label>
      <label><input type="radio" name="q4" value="access"> Championing players who are often overlooked.</label>
    </li>
    <li>
      When the deadline is looming, you naturally:
      <label><input type="radio" name="q5" value="prompt"> Automate repetitive tasks so the team regains time.</label>
      <label><input type="radio" name="q5" value="code"> Harden the build, squash bugs, and double-check integrations.</label>
      <label><input type="radio" name="q5" value="design"> Polish the UI/UX and tighten the narrative hook.</label>
      <label><input type="radio" name="q5" value="data"> Prepare explainer notes, slides, or walkthrough scripts.</label>
      <label><input type="radio" name="q5" value="access"> Run through accessibility and inclusivity checklists.</label>
    </li>
  </ol>
  <p><button type="submit" class="vp-button">Reveal my persona path</button></p>
</form>

<div id="persona-result" aria-live="polite"></div>

<script>
  if (typeof window !== 'undefined') {
    const form = document.getElementById('persona-quiz');
    const resultEl = document.getElementById('persona-result');
    const personaMap = {
      prompt: {
        name: 'Prompt Engineer',
        link: '/people/paths/prompt-engineer',
        summary: 'You’re the rapid experimenter who keeps momentum high by pairing with AI tools.'
      },
      code: {
        name: 'Code Mechanic',
        link: '/people/paths/code-mechanic',
        summary: 'You love tuning systems, integrating APIs, and keeping the build stable.'
      },
      design: {
        name: 'Designer Dreamer',
        link: '/people/paths/designer-dreamer',
        summary: 'You craft the look, feel, and narrative that makes the project sing.'
      },
      data: {
        name: 'Data Storyteller',
        link: '/people/paths/data-storyteller',
        summary: 'You translate complexity into clarity for players, judges, and teammates.'
      },
      access: {
        name: 'Accessibility Avenger',
        link: '/people/paths/accessibility-avenger',
        summary: 'You make sure every player can join the fun with inclusive design choices.'
      }
    };

    if (form && resultEl) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const scores = { prompt: 0, code: 0, design: 0, data: 0, access: 0 };
        let answered = 0;

        for (const element of form.elements) {
          if (element instanceof HTMLInputElement && element.type === 'radio') {
            if (element.checked) {
              const key = element.value;
              if (Object.prototype.hasOwnProperty.call(scores, key)) {
                scores[key] += 1;
              }
              answered += 1;
            }
          }
        }

        if (answered < 5) {
          resultEl.innerHTML = '<p>Please answer every question to get the best-fit persona.</p>';
          return;
        }

        let topPersona = 'prompt';
        for (const key of Object.keys(scores)) {
          if (scores[key] > scores[topPersona]) {
            topPersona = key;
          }
        }

        const persona = personaMap[topPersona];
        resultEl.innerHTML = `
          <div class="quiz-result">
            <h2>Your match: ${persona.name}</h2>
            <p>${persona.summary}</p>
            <p><a class="vp-button" href="${persona.link}">Open the ${persona.name} path</a></p>
            <p>Share this result with your team so everyone knows where you shine.</p>
          </div>
        `;
      });
    }
  }
</script>

---

### Up next
- [Browse persona paths](/people/persona-paths)

### Related guides
- [Prompt Engineer path](/people/paths/prompt-engineer)
- [Code Mechanic path](/people/paths/code-mechanic)
- [Accessibility Avenger path](/people/paths/accessibility-avenger)
