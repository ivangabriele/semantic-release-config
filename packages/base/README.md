# My Semantic Release Configuration

[![License][img-license]][lnk-license] [![NPM Version][img-npm]][lnk-npm]

My most commonly used Semantic Release configuration.

## Usage

Run:

```sh
yarn add -DE @ivangabriele/semantic-release-config-base
```

Extend it in your `package.json`:

```json
{
  // ...
  "release": {
    "extends": "@ivangabriele/semantic-release-config-base"
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
        uses: actions/checkout@v2
        with:
          fetch-depth: 0
          persist-credentials: false
      - name: Setup
        uses: actions/setup-node@v2
        with:
          cache: yarn
          node-version: 16
      - name: Install
        run: yarn

      # ...

      - name: Release
        env:
          GITHUB_TOKEN: ${{ secrets.GH_PAT }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
        run: yarn semantic-release
```

---

[img-license]: https://img.shields.io/github/license/ivangabriele/semantic-release-config?style=flat-square
[img-npm]: https://img.shields.io/npm/v/@ivangabriele/semantic-release-config-base?style=flat-square
[lnk-license]:
  https://github.com/ivangabriele/semantic-release-config/blob/main/packages/semantic-release-config-dist/LICENSE
[lnk-npm]: https://www.npmjs.com/package/@ivangabriele/semantic-release-config
