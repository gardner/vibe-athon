import fetch from "node-fetch";
import * as fs from "fs";
import 'dotenv/config'


const invokeUrl = "https://ai.api.nvidia.com/v1/genai/stabilityai/stable-diffusion-3-medium";

// GLOBAL STYLE PROMPT TO CONDITION ALL IMAGES
const vibeathonStyle = `
New Zealand Vibe-athon Creative Style — Clean modern illustration with vibrant community energy.
Soft geometric shapes and smooth gradients. Subtle neon-tech glow. Warm and inclusive.
Friendly shading with slight bloom. Minimal clutter, high clarity. No text in the image.
Palette: indigo, violet, cyan, sunset orange accents. Friendly, slightly futuristic feel. New Zealand style.
`;

// IMAGE REQUEST LIST
const images: { title: string; prompt: string; aspect: string }[] = [
  {
    title: "homepage-banner",
    aspect: "16:9",
    prompt: `
Homepage Banner – Vibe-athon Energy:
A vibrant community hackathon scene with diverse people working at laptops,
collaborating together with glowing interface panels. Energetic, playful, inspiring atmosphere.
No text, cinematic composition, wide layout.
`
  },
  {
    title: "persona-prompt-engineer",
    aspect: "1:1",
    prompt: `
Persona Icon – Prompt Engineer:
A futuristic builder typing into a glowing AI terminal with floating code shapes and light particles.
Represents "AI-powered creative problem solver".
Minimal background. No text.
`
  },
  {
    title: "persona-code-mechanic",
    aspect: "1:1",
    prompt: `
Persona Icon – Code Mechanic:
A determined engineer fixing a glowing cube made of code fragments using digital tools.
Represents skilled programmers and system builders.
Minimal background. No text.
`
  },
  {
    title: "persona-designer-dreamer",
    aspect: "1:1",
    prompt: `
Persona Icon – Designer & Dreamer:
Creative storyteller surrounded by floating art panels, storyboards and UI shapes.
Represents design, creativity, and imagination.
`
  },
  {
    title: "persona-data-storyteller",
    aspect: "1:1",
    prompt: `
Persona Icon – Data Storyteller:
A character organizing floating diagrams and graphs into clarity.
Represents explanation, teaching, understanding.
`
  },
  {
    title: "persona-accessibility-avenger",
    aspect: "1:1",
    prompt: `
Persona Icon – Accessibility Avenger:
Diverse advocate character placing a universal access icon into a glowing interface.
Friendly and helpful representation.
`
  },
  {
    title: "handbook-flow-diagram",
    aspect: "16:9",
    prompt: `
Simple diagram-style composition showing a friendly journey flow:
Start → Choose Persona → Templates → Build → Test → Submit → Celebrate.
`
  },
  {
    title: "team-collaboration",
    aspect: "16:9",
    prompt: `
Team collaboration scene: 4 people around a laptop at a workspace table,
laughing and working together with floating UI elements.
Warm inclusive team vibe.
`
  },
  {
    title: "game-dev-pipeline",
    aspect: "16:9",
    prompt: `
Minimal infographic style: icons representing
Idea → Prototype → Assets → Build → Playtest → Submit.
No text, clean layout.
`
  },
  {
    title: "submission-flow",
    aspect: "16:9",
    prompt: `
Simple illustration of submission: a folder icon arrow to a USB drive and laptop.
Clean and clear, minimal shapes.
`
  }
];

if (!process.env.NVIDIA_API_KEY) {
  throw Error("NVIDIA_API_KEY required")
}
const headers = {
  "Authorization": `Bearer ${process.env.NVIDIA_API_KEY}`,
  "Accept": "application/json",
};
interface ImageResponse {
  image: string;
  finish_reason: string;
  seed: number;
}

const sessionSeed = Math.floor(Math.random() * 65535);

async function generateImages() {
  for (const img of images) {
    console.log(`Generating: ${img.title}...`);

    const payload = {
      prompt: img.prompt + vibeathonStyle,
      cfg_scale: 5,
      aspect_ratio: img.aspect,
      seed: sessionSeed,
      steps: 50,
      negative_prompt: `
      blurry, noisy, low quality, distorted, extra limbs, unstable anatomy,
      watermark, text, logo, artifact, grainy, photo, realistic photography
      `
    };

    const response = await fetch(invokeUrl, {
      method: "post",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json", ...headers }
    });

    if (response.status != 200) {
      const errBody = await response.text();
      console.error(`Failed: ${img.title}`);
      throw new Error(`Invocation failed: ${response.status} - ${errBody}`);
    }

    const json = await response.json() as ImageResponse;
    const base64Image = json?.image;
    const finishReason = json?.finish_reason;
    const seed = json?.seed

    if (!base64Image) throw new Error(`No image returned for ${img.title}`);

    const buffer = Buffer.from(base64Image, "base64");
    fs.mkdirSync(`images/${seed}`, { recursive: true })
    const fname = `images/${seed}/${img.title}.png`;
    fs.writeFileSync(fname, buffer);
    console.log(`✅ Saved: ${fname}`);
  }
}

generateImages().catch(console.error);
