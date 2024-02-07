import chalk from 'chalk'

export function logErrorAndExit(message) {
  console.error(chalk.red(`[@ivangabriele/semantic-release-config-monorepo] Error:`))
  console.error(chalk.red(message))

  process.exit(1)
}
