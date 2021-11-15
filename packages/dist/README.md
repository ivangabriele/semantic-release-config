# My Semantic Release Configuration

[![License][img-license]][lnk-license] [![NPM Version][img-npm]][lnk-npm]

My most commonly used Semantic Release configuration.

## Usage

Run:

```sh
yarn add -DE @ivangabriele/semantic-release-config-dist
```

or:

```sh
npm i -DE @ivangabriele/semantic-release-config-dist
```

Then extend it in your `package.json`:

```json
{
  // ...
  "release": {
    "extends": "@ivangabriele/semantic-release-config-dist"
  }
}
```

---

[img-license]: https://img.shields.io/github/license/ivangabriele/semantic-release-config?style=flat-square
[img-npm]: https://img.shields.io/npm/v/@ivangabriele/semantic-release-config-dist?style=flat-square
[lnk-license]:
  https://github.com/ivangabriele/semantic-release-config/blob/main/packages/semantic-release-config-dist/LICENSE
[lnk-npm]: https://www.npmjs.com/package/@ivangabriele/semantic-release-config-dist
