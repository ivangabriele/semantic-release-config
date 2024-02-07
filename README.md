# My Semantic Release Configurations

[![MIT License][img-license]][lnk-license] [![GitHub Check Workflow Status][img-github]][lnk-github]

My most commonly used Semantic Release configurations.

---

- [Usage](#usage)
  - [Base](#base)
  - [Dist](#dist)
  - [Monorepo](#monorepo)
  - [No NPM](#no-npm)
- [Contribute](#contribute)

---

## Usage

### Base

[![NPM Version][img-npm-base]][lnk-npm-base]

**Package name:** `@ivangabriele/semantic-release-config-base`.

**Description:** A basic configuration for Semantic Release when using a single package repository (no monorepo) and NPM
or Yarn as package manager.

Check the package [README](./packages/base/README.md).

### Dist

[![NPM Version][img-npm-dist]][lnk-npm-dist]

**Package name:** `@ivangabriele/semantic-release-config-dist`.

**Description:** A basic configuration for Semantic Release when using a single package repository (no monorepo) and NPM
or Yarn as package manager **releasing** from a root `/dist` folder.

Check the package [README](./packages/dist/README.md).

### Monorepo

[![NPM Version][img-npm-monorepo]][lnk-npm-monorepo]

**Package name:** `@ivangabriele/semantic-release-config-monorepo`.

**Description:** A basic configuration for Semantic Release when using a monorepo and NPM or Yarn as package manager.

Check the package [README](./packages/monorepo/README.md).

### No NPM

[![NPM Version][img-npm-no-npm]][lnk-npm-no-npm]

**Package name:** `@ivangabriele/semantic-release-config-no-npm`.

**Description:** A basic configuration for Semantic Release when using a single non-JS package repository.

Check the package [README](./packages/no-npm/README.md).

## Contribute

Please refer to the [contribution guidelines](./CONTRIBUTING.md) for information on how to contribute to this project.

---

[img-github]:
  https://img.shields.io/github/actions/workflow/status/ivangabriele/semantic-release-config/check.yml?branch=main&label=CI&style=for-the-badge
[img-license]: https://img.shields.io/github/license/ivangabriele/semantic-release-config?style=for-the-badge
[img-npm-base]: https://img.shields.io/npm/v/@ivangabriele/semantic-release-config-base?style=for-the-badge
[img-npm-dist]: https://img.shields.io/npm/v/@ivangabriele/semantic-release-config-dist?style=for-the-badge
[img-npm-monorepo]: https://img.shields.io/npm/v/@ivangabriele/semantic-release-config-monorepo?style=for-the-badge
[img-npm-no-npm]: https://img.shields.io/npm/v/@ivangabriele/semantic-release-config-no-npm?style=for-the-badge
[lnk-github]: https://github.com/ivangabriele/semantic-release-config/actions?query=branch%3Amain++
[lnk-license]: https://github.com/ivangabriele/semantic-release-config/blob/main/LICENSE
[lnk-npm-base]: https://www.npmjs.com/package/@ivangabriele/semantic-release-config-base
[lnk-npm-dist]: https://www.npmjs.com/package/@ivangabriele/semantic-release-config-dist
[lnk-npm-monorepo]: https://www.npmjs.com/package/@ivangabriele/semantic-release-config-monorepo
[lnk-npm-no-npm]: https://www.npmjs.com/package/@ivangabriele/semantic-release-config-no-npm
