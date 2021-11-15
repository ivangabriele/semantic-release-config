# My Semantic Release Configurations

[![License][img-license]][lnk-license]

My most commonly used Semantic Release configurations.

## Usage

### Base

[![NPM Version][img-npm-base]][lnk-npm-base]

Run:

```sh
yarn add -DE @ivangabriele/semantic-release-config-base
```

or:

```sh
npm i -DE @ivangabriele/semantic-release-config-base
```

Then extend it in your `package.json`:

```json
{
  // ...
  "release": {
    "extends": "@ivangabriele/semantic-release-config-base"
  }
}
```

### Dist

[![NPM Version][img-npm-dist]][lnk-npm-dist]

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
[img-npm-base]: https://img.shields.io/npm/v/@ivangabriele/semantic-release-config-base?style=flat-square
[img-npm-dist]: https://img.shields.io/npm/v/@ivangabriele/semantic-release-config-dist?style=flat-square
[lnk-license]: https://github.com/ivangabriele/semantic-release-config/blob/main/LICENSE
[lnk-npm-base]: https://www.npmjs.com/package/@ivangabriele/semantic-release-config-base
[lnk-npm-dist]: https://www.npmjs.com/package/@ivangabriele/semantic-release-config-dist
