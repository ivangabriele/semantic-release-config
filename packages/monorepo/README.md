# My Semantic Release Configuration

[![MIT License][img-license]][lnk-license] [![GitHub Check Workflow Status][img-github]][lnk-github]
[![NPM Version][img-npm]][lnk-npm]

My most commonly used Semantic Release configuration.

## Usage

Run:

```sh
npm i -DE @ivangabriele/semantic-release-config-monorepo
```

or:

```sh
yarn add -DE @ivangabriele/semantic-release-config-monorepo
```

Extend it in your `package.json`:

```json
{
  // ...
  "release": {
    "extends": "@ivangabriele/semantic-release-config-monorepo"
  }
}
```

Then add a manually triggered workflow in Github Actions (i.e.: `.github\workflows\release.yml`):

```yaml
name: Release

on: workflow_dispatch

jobs:
  release:
    name: Release
    runs-on: ubuntu-latest
    permissions:
      contents: write
      id-token: write
      issues: write
      pull-requests: write
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
          persist-credentials: false
      - name: Setup
        uses: actions/setup-node@v4
        with:
          cache: yarn
          node-version: 20
      - name: Install
        run: yarn --immutable
      - name: Build
        run: yarn build
      # We have to to login to NPM this way rather than using NPM_TOKEN env
      # because it's not available in @semantic-release/exec `publishCmd` context.
      - name: Login to NPM
        run: echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_TOKEN }}" > ~/.npmrc
      - name: Release
        run: yarn semantic-release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      - name: Get new version
        run: echo "NEW_VERSION=$(npm pkg get version | sed 's/"//g')" >> "$GITHUB_ENV"
      - name: Create pull request
        uses: peter-evans/create-pull-request@v6
        with:
          branch: ci-release-v${{ env.NEW_VERSION }}
          commit-message: 'ci(release): v${{ env.NEW_VERSION }}'
          title: 'ci(release): v${{ env.NEW_VERSION }}'
          token: ${{ secrets.GITHUB_TOKEN }}
```

---

[img-github]:
  https://img.shields.io/github/actions/workflow/status/ivangabriele/semantic-release-config/check.yml?branch=main&label=CI&style=for-the-badge
[img-license]: https://img.shields.io/github/license/ivangabriele/semantic-release-config?style=flat-square
[img-npm]: https://img.shields.io/npm/v/@ivangabriele/semantic-release-config-monorepo?style=flat-square
[lnk-github]: https://github.com/ivangabriele/semantic-release-config/actions?query=branch%3Amain++
[lnk-license]: https://github.com/ivangabriele/semantic-release-config/blob/main/packages/monorepo/LICENSE
[lnk-npm]: https://www.npmjs.com/package/@ivangabriele/semantic-release-config
