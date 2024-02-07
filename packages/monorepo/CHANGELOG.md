## [4.1.2](https://github.com/ivangabriele/semantic-release-config/compare/v4.1.1...v4.1.2) (2024-02-07)


### Documentation

* **readme:** fix Github Actions workflow example for @ivangabriele/semantic-release-config-monorepo ([eb5e859](https://github.com/ivangabriele/semantic-release-config/commit/eb5e859433d3a0f4cfcbf04c5882b0999aa9539b))

## [4.1.1](https://github.com/ivangabriele/semantic-release-config/compare/v4.1.0...v4.1.1) (2024-02-07)


### Build System

* **dev-deps:** fix @ivangabriele/prettier-config version ([b116e25](https://github.com/ivangabriele/semantic-release-config/commit/b116e254e32720591ebd1cc3a7e264132632090a))

## [4.1.0](https://github.com/ivangabriele/semantic-release-config/compare/v4.0.1...v4.1.0) (2024-02-07)


### ⚠ BREAKING CHANGES

* **base-yarn:** Delete @ivangabriele/semantic-release-config-base-yarn package.
* **dist-yarn:** Delete @ivangabriele/semantic-release-config-dist-yarn package.
* **monorepo:** Set Node version to >=20 & migrate to full ESM.

### Features

* **base-yarn:** delete ([bc0651f](https://github.com/ivangabriele/semantic-release-config/commit/bc0651f2f1aee1f2799b53a9f27d1cc0c3f867c5))
* **dist-yarn:** delete ([12a1ba4](https://github.com/ivangabriele/semantic-release-config/commit/12a1ba4df4440d96c7aa723b2a11c4a84b04c02b))
* **monorepo:** create ([7821bd2](https://github.com/ivangabriele/semantic-release-config/commit/7821bd2b1d73f4a13ea5bf670fec76d22bfd0d9a))


### Bug Fixes

* **monorepo:** add missing path var in semantic-release-config-monorepo bin ([5ff5c99](https://github.com/ivangabriele/semantic-release-config/commit/5ff5c998e1446dcf9b8256f33a2d1d1b4b738c08))
* **monorepo:** remove undefined var ([9d21865](https://github.com/ivangabriele/semantic-release-config/commit/9d2186567256b25d3e3260a7056c7e212d495a6a))
* **monorepo:** replace default @semantic-release/npm with custom publishCmd ([d222f83](https://github.com/ivangabriele/semantic-release-config/commit/d222f8331d22a46db0f0a251ef60ba609ecbd577))
* rename wrong @semantic-release/commit-analyzer release rules prop ([64ae00c](https://github.com/ivangabriele/semantic-release-config/commit/64ae00c906ba389d8e37e47a6b3cb2499dec906c))


### Documentation

* **readme:** add descriptions ([9987ef7](https://github.com/ivangabriele/semantic-release-config/commit/9987ef73100033773cc47f479b363d5a3d945feb))
* **readme:** add missing section for @ivangabriele/semantic-release-config-monorepo ([cc6ade1](https://github.com/ivangabriele/semantic-release-config/commit/cc6ade1d692343d78013fc5cfe3c3985371a3e77))
* **readme:** fix typo ([1c39b3d](https://github.com/ivangabriele/semantic-release-config/commit/1c39b3dd38da9e2a3afac452c2cc4c4c750a423e))
* **readme:** update workflow example ([24e4783](https://github.com/ivangabriele/semantic-release-config/commit/24e4783c5daf2e10710dd93dd7224a1a5127f476))


### Code Refactoring

* **npm:** remove package.json comment ([b385533](https://github.com/ivangabriele/semantic-release-config/commit/b385533a1dac15b9cd91a703a6e51a36b91860bd))


### Build System

* **npm:** fix repository prop in package.json ([6627453](https://github.com/ivangabriele/semantic-release-config/commit/6627453504b97c57c9b7b0105596cb73c424d580))
* **npm:** update release commands to directly use semantic-release dep ([0d871e3](https://github.com/ivangabriele/semantic-release-config/commit/0d871e3ff03cda76e682b0159e5b361bcf349e61))
* **yarn:** include yarn release CLI ([d6cd266](https://github.com/ivangabriele/semantic-release-config/commit/d6cd266f821ad62317ce0c904d382a64c1362ee8))
