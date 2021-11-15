/* eslint-disable import/no-extraneous-dependencies */

const shelljs = require('shelljs')

const VERSION = process.env.npm_package_version

function run(command) {
  shelljs.echo(`Running: \`${command}\`…`)
  const output = shelljs.exec(command)

  if (output.code !== 0) {
    shelljs.exit(1)
  }
}

;(() => {
  try {
    run(`npm version ${VERSION} --workspaces`)
    run(`yarn`)
    run(`git add .`)
    run(`git commit --amend --no-edit`)
    run(`git tag -f v${VERSION}`)
    run(`npm publish --workspaces`)
    run(`git push origin HEAD --tags`)
  } catch (err) {
    shelljs.echo(`[scripts/finalizeVersionBump.js] Error: ${err.message}`)

    shelljs.exit(1)
  }
})()
