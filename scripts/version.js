import { getAbsolutePath } from 'esm-path'
import { $, execa } from 'execa'
import { promises as fs } from 'fs'
import semver from 'semver'

try {
  const ROOT_PATH = getAbsolutePath(import.meta.url, '..')

  const rootPackageJson = JSON.parse(await fs.readFile(`${ROOT_PATH}/package.json`, 'utf-8'))

  if (rootPackageJson.preversion) {
    await $`yarn preversion`
  }

  const workspacePackageDirectories = await fs.readdir('./packages')
  const workspacePackages = await Promise.all(
    workspacePackageDirectories.map(async directory => ({
      json: JSON.parse(await fs.readFile(`${ROOT_PATH}/packages/${directory}/package.json`, 'utf-8')),
      path: `${ROOT_PATH}/packages/${directory}/package.json`,
    })),
  )

  const [release] = process.argv.slice(2)
  const nextVersion = semver.inc(rootPackageJson.version, release)
  if (!nextVersion) {
    console.error(
      [
        `Error: Invalid [release]: ${release}.`,
        `Can be one of: "major", "premajor", "minor", "preminor", "patch", "prepatch", or "prerelease".`,
      ].join('\n'),
    )
    process.exit(1)
  }

  const nextRootPackageJson = {
    ...rootPackageJson,
    version: nextVersion,
  }
  const nextWorkspacePackages = workspacePackages.map(workspacePackage => ({
    ...workspacePackage,
    json: {
      ...workspacePackage.json,
      version: nextVersion,
    },
  }))

  await fs.writeFile(`${ROOT_PATH}/package.json`, JSON.stringify(nextRootPackageJson, null, 2))
  await Promise.all(
    nextWorkspacePackages.map(async ({ json, path }) => {
      await fs.writeFile(path, JSON.stringify(json, null, 2))
    }),
  )

  const execaOptions = { cwd: ROOT_PATH }
  await $(execaOptions)`yarn`
  await $(execaOptions)`git add .`
  await execa('git', ['commit', '-m', `ci(release): ${nextVersion}`], execaOptions)
  await $(execaOptions)`git tag v${nextVersion}`

  if (rootPackageJson.postversion) {
    await $`yarn postversion`
  }
} catch (err) {
  console.error(`Error: ${err}`)
  console.debug(err)
  process.exit(1)
}
