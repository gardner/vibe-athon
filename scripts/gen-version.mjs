import { execSync } from 'child_process'
import { writeFileSync } from 'fs'
import { resolve } from 'path'

// Get the current git hash
const gitHash = execSync('git rev-parse --short HEAD').toString().trim()

// Create a version file that can be imported
const versionContent = `export const version = '${gitHash}'
`

// Write to a file that can be imported by the theme
const versionFilePath = resolve(process.cwd(), '.vitepress', 'version.ts')
writeFileSync(versionFilePath, versionContent)

console.log(`Version file generated with hash: ${gitHash}`)