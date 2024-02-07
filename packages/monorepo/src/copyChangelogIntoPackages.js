import fsExtra from 'fs-extra'
import path from 'path'
import { logErrorAndExit } from './helpers/logErrorAndExit.js'

export async function copyChangelogIntoPackages(packagePackageJsonPaths) {
  try {
    const sourceChangelogFilePath = path.join(process.cwd(), 'CHANGELOG.md')
    if (!(await fsExtra.exists(sourceChangelogFilePath))) {
      logErrorAndExit(`Root changelog file not found at \`${sourceChangelogFilePath}\`.`)
    }

    const packageRootPaths = packagePackageJsonPaths.map(packagePackageJsonPath =>
      packagePackageJsonPath.replace('/package.json', ''),
    )

    for (const packageRootPath of packageRootPaths) {
      try {
        const targetChangelogFilePath = path.join(packageRootPath, 'CHANGELOG.md')

        await fsExtra.copy(sourceChangelogFilePath, targetChangelogFilePath)
      } catch (err) {
        logErrorAndExit(`Failed to copy changelog to \`${packageRootPath}\`: ${err.message}`)
      }
    }
  } catch (err) {
    logErrorAndExit(`An unexpected error occurred: ${err.message}`)
  }
}
