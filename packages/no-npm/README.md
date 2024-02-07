# My Semantic Release Configuration

[![MIT License][img-license]][lnk-license] [![NPM Version][img-npm]][lnk-npm]

My most commonly used Semantic Release configuration.

## Usage

Run:

```sh
npm i -DE @ivangabriele/semantic-release-config-no-npm
```

or:

```sh
yarn add -DE @ivangabriele/semantic-release-config-no-npm
```

Extend it in your `package.json`:

```json
{
  // ...
  "release": {
    "extends": "@ivangabriele/semantic-release-config-no-npm"
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
      - name: Release
        run: yarn release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
      - name: Get new version
        run: echo "NEW_VERSION=$(npm pkg get version | sed 's/"//g')" >> "$GITHUB_ENV"
      - name: Create pull request
        uses: peter-evans/create-pull-request@v6
        with:
          branch: ci-release-v${{ env.NEW_VERSION }}
          # https://docs.github.com/en/actions/managing-workflow-runs/skipping-workflow-runs
          commit-message: 'ci(release): v${{ env.NEW_VERSION }}'
          title: 'ci(release): v${{ env.NEW_VERSION }}'
          token: ${{ secrets.GITHUB_TOKEN }}
```

---

[img-license]: https://img.shields.io/github/license/ivangabriele/semantic-release-config?style=flat-square
[img-npm]: https://img.shields.io/npm/v/@ivangabriele/semantic-release-config-no-npm?style=flat-square
[lnk-license]: https://github.com/ivangabriele/semantic-release-config/blob/main/packages/no-npm/LICENSE
[lnk-npm]: https://www.npmjs.com/package/@ivangabriele/semantic-release-config
