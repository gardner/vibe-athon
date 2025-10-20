#!/usr/bin/env node
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

const cssDirectories = [path.join(repoRoot, '.vitepress', 'theme')];
const contentDirectories = [path.join(repoRoot, 'docs')];

const externalAllowlist = new Set([
  'vp-button',
]);

const cssClassPattern = /\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)/g;
const classAttrDoublePattern = /class\s*=\s*"([^"]+)"/g;
const classAttrSinglePattern = /class\s*=\s*'([^']+)'/g;

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const res = path.resolve(dir, entry.name);
      if (entry.isDirectory()) {
        return collectFiles(res);
      }
      return res;
    })
  );
  return files.flat();
}

async function readCssClasses() {
  const cssFiles = (
    await Promise.all(cssDirectories.map((dir) => collectFiles(dir)))
  )
    .flat()
    .filter((file) => file.endsWith('.css'));

  const classes = new Set();
  for (const file of cssFiles) {
    const content = await readFile(file, 'utf8');
    let match;
    while ((match = cssClassPattern.exec(content)) !== null) {
      const [, className] = match;
      classes.add(className);
    }
  }
  return classes;
}

function extractClassesFromContent(content, pattern) {
  const classes = [];
  let match;
  while ((match = pattern.exec(content)) !== null) {
    classes.push(...match[1].split(/\s+/).filter(Boolean));
  }
  return classes;
}

async function readUsedClasses() {
  const contentFiles = (
    await Promise.all(contentDirectories.map((dir) => collectFiles(dir)))
  ).flat();

  const classes = new Set();
  for (const file of contentFiles) {
    const content = await readFile(file, 'utf8');
    extractClassesFromContent(content, classAttrDoublePattern).forEach((cls) =>
      classes.add(cls)
    );
    extractClassesFromContent(content, classAttrSinglePattern).forEach((cls) =>
      classes.add(cls)
    );
  }
  return classes;
}

async function main() {
  try {
    const definedClasses = await readCssClasses();
    const usedClasses = await readUsedClasses();

    const missing = [];
    for (const cls of usedClasses) {
      if (definedClasses.has(cls) || externalAllowlist.has(cls)) {
        continue;
      }
      missing.push(cls);
    }

    if (missing.length > 0) {
      console.error('Missing CSS class definitions detected:');
      for (const cls of missing.sort()) {
        console.error(`  - ${cls}`);
      }
      console.error(
        '\nAdd the missing class definitions to .vitepress/theme/style.css or update the allowlist in scripts/check-missing-css-classes.mjs if they are provided by an external theme.'
      );
      process.exit(1);
    }

    console.log('No missing CSS classes found.');
  } catch (error) {
    console.error('Failed to validate CSS classes.');
    console.error(error);
    process.exit(1);
  }
}

main();
