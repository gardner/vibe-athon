import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'docs',
  title: 'NAIS Vibe-athon 2025',
  description:
    'The official Vibe-athon handbook — a practical build guide for teams creating AI-powered educational web games in one day. Packed with starter templates, examples, prompts, and submission rules, this doc site is your mission control for building, shipping, and surviving the Vibe-athon.',
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/gardner/vibe-athon/edit/master/docs/:path'
    },
    nav: [
      { text: 'Guide', link: '/guide/index' },
      { text: 'Build', link: '/build/index' },
      { text: 'Create', link: '/create/index' },
      { text: 'Ship', link: '/ship/index' },
      { text: 'Judging', link: '/judging/index' },
      { text: 'People', link: '/people/index' },
      { text: 'Personas', link: '/people/persona-paths' },
      { text: 'Ops', link: '/ops/index' },
      { text: 'About', link: '/about/nelson-ai-sandbox' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Guide Overview', link: '/guide/index' },
            { text: 'Welcome & Event Overview', link: '/guide/welcome' },
            { text: 'What You’ll Build', link: '/guide/what-youll-build' },
            { text: 'Day Schedule & Milestones', link: '/guide/schedule' },
            { text: 'Code of Conduct', link: '/guide/code-of-conduct' },
            { text: 'IP & Licensing', link: '/guide/ip-licensing' },
            { text: 'FAQ', link: '/guide/faq' },
            { text: 'Handbook Flow', link: '/guide/flow' }
          ]
        }
      ],
      '/build/': [
        {
          text: 'Build',
          items: [
            { text: 'Build Overview', link: '/build/index' },
            { text: 'Technical Brief', link: '/build/technical-brief' },
            { text: 'Choose Your Path', link: '/build/choose-your-path' },
            { text: 'Quickstart – Twine', link: '/build/quickstart-twine' },
            { text: 'Quickstart – p5.js', link: '/build/quickstart-p5' },
            { text: 'Quickstart – Vanilla JS', link: '/build/quickstart-vanilla' },
            { text: 'Code Templates', link: '/build/code-templates' },
            { text: 'Common Patterns', link: '/build/common-patterns' },
            { text: 'Accessibility Basics', link: '/build/accessibility-basics' },
            { text: 'Performance & Offline', link: '/build/performance-offline' }
          ]
        }
      ],
      '/create/': [
        {
          text: 'Create',
          items: [
            { text: 'Create Overview', link: '/create/index' },
            { text: 'Prompting For Non-Coders', link: '/create/prompting-for-non-coders' },
            { text: 'Writing Clarity', link: '/create/writing-clarity' },
            { text: 'Images & Art Pipelines', link: '/create/images-art-pipelines' },
            { text: 'AI Audio & Music', link: '/create/ai-audio-music' },
            { text: 'Ethics & Safety', link: '/create/ethics-safety' }
          ]
        }
      ],
      '/ship/': [
        {
          text: 'Ship',
          items: [
            { text: 'Ship Overview', link: '/ship/index' },
            { text: 'QA Checklist', link: '/ship/qa-checklist' },
            { text: 'Submission Rules', link: '/ship/submission-rules' },
            { text: 'Folder Structure', link: '/ship/folder-structure' },
            { text: 'Staging & Hand-In', link: '/ship/staging-hand-in' },
            { text: 'Post-Event Publishing', link: '/ship/post-event-publishing' }
          ]
        }
      ],
      '/judging/': [
        {
          text: 'Judging',
          items: [
            { text: 'Judging Overview', link: '/judging/index' },
            { text: 'Rubric', link: '/judging/rubric' },
            { text: 'Demo Script', link: '/judging/demo-script' },
            { text: 'Game Examples', link: '/judging/game-examples' },
            { text: 'Awards', link: '/judging/awards' }
          ]
        }
      ],
      '/people/': [
        {
          text: 'People',
          items: [
            { text: 'People Overview', link: '/people/index' },
            { text: 'Team Roles', link: '/people/team-roles' },
            { text: 'Mentor Support', link: '/people/mentor-support' }
          ]
        },
        {
          text: 'Personas',
          items: [
            { text: 'Start Here', link: '/people/persona-paths' },
            { text: 'Quiz', link: '/people/persona-quiz' },
            { text: 'Prompt Engineer Path', link: '/people/paths/prompt-engineer' },
            { text: 'Code Mechanic Path', link: '/people/paths/code-mechanic' },
            { text: 'Designer Dreamer Path', link: '/people/paths/designer-dreamer' },
            { text: 'Data Storyteller Path', link: '/people/paths/data-storyteller' },
            { text: 'Accessibility Avenger Path', link: '/people/paths/accessibility-avenger' }
          ]
        }
      ],
      '/ops/': [
        {
          text: 'Ops',
          items: [
            { text: 'Ops Overview', link: '/ops/index' },
            { text: 'Venue Info', link: '/ops/venue-info' },
            { text: 'Offline Survival Kit', link: '/ops/offline-survival-kit' },
            { text: 'Troubleshooting', link: '/ops/troubleshooting' },
            { text: 'Contingencies', link: '/ops/contingencies' },
            { text: 'After the Event', link: '/ops/after-the-event' }
          ]
        }
      ],
      '/about/': [
        {
          text: 'About',
          items: [
            { text: 'Nelson AI Sandbox', link: '/about/nelson-ai-sandbox' },
            { text: 'Why Vibe-athon', link: '/about/why-vibeathon' },
            { text: 'Sponsors', link: '/about/sponsors' },
            { text: 'Credits', link: '/about/credits' }
          ]
        }
      ]
    }
  }
})
