#!/usr/bin/env node

import fs from 'fs-extra'
import path from 'path'

import { bumpPackageVersions } from '../src/bumpPackageVersions.js'
import { copyChangelogIntoPackages } from '../src/copyChangelogIntoPackages.js'
import { logErrorAndExit } from '../src/helpers/logErrorAndExit.js'

const args = process.argv.slice(2)
if (args.length !== 1) {
  logErrorAndExit('No <version> provided. Usage: `semantic-release-config-monorepo <version>`.')
}
const nextReleaseVersion = args[0]

const packagesPath = path.join(process.cwd(), 'packages')
const maybePackageRootPaths = await fs.readdir(packagesPath)
const packagePackageJsonPaths = []
for (const maybePackageRootPath of maybePackageRootPaths) {
  const maybePackagePackageJsonPath = path.join(packagesPath, maybePackageRootPath, 'package.json')
  if (await fs.pathExists(maybePackagePackageJsonPath)) {
    packagePackageJsonPaths.push(maybePackagePackageJsonPath)
  }
}
if (packagePackageJsonPaths.length === 0) {
  logErrorAndExit(`No package.json files found in the \`packages/*\` directories within \`${process.cwd()}\`.`)
}

await bumpPackageVersions(packagePackageJsonPaths, nextReleaseVersion)
await copyChangelogIntoPackages(packagePackageJsonPaths)
