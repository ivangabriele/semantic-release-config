# Contributing

- [Getting Started](#getting-started)
- [Release](#release)

## Getting Started

```sh
yarn
yarn prepare
```

## Release

```sh
yarn wersion <release>
yarn publish
```

`<release>` can be one of: "patch", "minor", "major", "prepatch", "preminor", "premajor" or "prewersion".

You can run it with --dry-run or -d to see what would happen without actually bumping your packages versions.
