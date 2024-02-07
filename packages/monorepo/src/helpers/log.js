import chalk from 'chalk'

export function log(message) {
  console.log(chalk.blue(`[@ivangabriele/semantic-release-config-monorepo] ${message}`))
}
