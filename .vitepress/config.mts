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
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Guide', link: '/guide/index' },
      { text: 'Build', link: '/build/index' },
      { text: 'Ship', link: '/ship/index' },
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
            { text: 'Team Roles & Support', link: '/guide/team-roles' },
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
          text: 'Get Started',
          items: [
            { text: 'Build Overview', link: '/build/index' },
            { text: 'Technical Requirements', link: '/build/technical-requirements' },
            { text: 'Choose Your Path', link: '/build/choose-your-path' },
            { text: 'Quickstart – Twine', link: '/build/quickstart-twine' },
            { text: 'Quickstart – p5.js', link: '/build/quickstart-p5' },
            { text: 'Quickstart – Vanilla JS', link: '/build/quickstart-vanilla' },
            { text: 'Code Templates', link: '/build/code-templates' },
            { text: 'Common Patterns', link: '/build/common-patterns' },
            { text: 'Performance & Packaging', link: '/build/performance-offline' }
          ]
        },
        {
          text: 'Create & Polish',
          items: [
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
          text: 'Ship, Submit & Demo',
          items: [
            { text: 'Ship Overview', link: '/ship/index' },
            { text: 'QA Checklist', link: '/ship/qa-checklist' },
            { text: 'Submission Rules', link: '/ship/submission-rules' },
            { text: 'Folder Structure', link: '/ship/folder-structure' },
            { text: 'Staging & Hand-In', link: '/ship/staging-hand-in' },
            { text: 'Post-Event Publishing', link: '/ship/post-event-publishing' },
            { text: 'Judging & Demo Overview', link: '/ship/judging-guide' },
            { text: 'Judging Rubric', link: '/ship/judging-rubric' },
            { text: 'Demo Script', link: '/ship/demo-script' },
            { text: 'Game Examples', link: '/ship/game-examples' },
            { text: 'Awards', link: '/ship/awards' }
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
