import fsExtra from 'fs-extra'
import { logErrorAndExit } from './helpers/logErrorAndExit.js'

export async function bumpPackageVersions(packagePackageJsonPaths, nextReleaseVersion) {
  try {
    for (const packagePackageJsonPath of packagePackageJsonPaths) {
      try {
        const packagePackageJsonSource = await fsExtra.readFile(packagePackageJsonPath, 'utf-8')
        const nextPackagePackageJsonSource = packagePackageJsonSource.replace(
          /"version":\s*"[^"]+"/,
          `"version": "${nextReleaseVersion}"`,
        )

        await fsExtra.writeFile(packagePackageJsonPath, nextPackagePackageJsonSource, 'utf-8')
      } catch (err) {
        logErrorAndExit(`Failed to bump version in \`${packagePackageJsonPath}\`: ${err.message}`)
      }
    }
  } catch (err) {
    logErrorAndExit(`An unexpected error occurred: ${err.message}`)
  }
}
