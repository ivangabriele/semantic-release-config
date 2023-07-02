# My Semantic Release Configuration

[![MIT License][img-license]][lnk-license] [![NPM Version][img-npm]][lnk-npm]

My most commonly used Semantic Release configuration.

## Usage

Run:

```sh
yarn add -DE @ivangabriele/semantic-release-config-dist-yarn
```

or:

```sh
npm i -DE @ivangabriele/semantic-release-config-dist-yarn
```

Extend it in your `package.json`:

```json
{
  // ...
  "release": {
    "extends": "@ivangabriele/semantic-release-config-dist-yarn"
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
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
          persist-credentials: false
      - name: Setup
        uses: actions/setup-node@v3
        with:
          cache: yarn
          node-version: 20
      - name: Install
        run: yarn --frozen-lockfile
      - name: Build
        run: yarn build
      - name: Release
        run: yarn semantic-release
        env:
          GITHUB_TOKEN: ${{ secrets.GH_PAT }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
      - name: Get version
        id: get_version
        run: echo ::set-output name=version::$(npm pkg get version | sed 's/"//g')
      - name: Create pull request
        uses: peter-evans/create-pull-request@v4
        with:
          branch: ci-release-v${{ steps.get_version.outputs.version }}
          # https://docs.github.com/en/actions/managing-workflow-runs/skipping-workflow-runs
          commit-message: 'ci(release): ${{ steps.get_version.outputs.version }}'
          title: 'ci(release): ${{ steps.get_version.outputs.version }}'
          token: ${{ secrets.GH_PAT }}
```

---

[img-license]: https://img.shields.io/github/license/ivangabriele/semantic-release-config?style=for-the-badge
[img-npm]: https://img.shields.io/npm/v/@ivangabriele/semantic-release-config-dist-yarn?style=for-the-badge
[lnk-license]: https://github.com/ivangabriele/semantic-release-config/blob/main/packages/dist-yarn/LICENSE
[lnk-npm]: https://www.npmjs.com/package/@ivangabriele/semantic-release-config-dist-yarn
