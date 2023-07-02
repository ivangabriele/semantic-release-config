import { $ } from 'execa'

const VERSION = process.env.npm_package_version

try {
  await $`npm version ${VERSION} --workspaces`
  await $`yarn`
  await $`git add .`
  await $`git commit --amend --no-edit`
  await $`git tag -f v${VERSION}`
  await $`npm publish --workspaces`
  await $`git push origin HEAD --tags`
} catch (err) {
  console.error(`[scripts/finalizeVersionBump.js] Error: ${err.message}`)

  process.exit(1)
}
