# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `toHaveRequired` matcher to test documents with required set to true
- `toBeTrimmed` matcher to test whether a document has a trim option set
- npm scripts to build, format and validate the codebase
  - `npm run build` - build the project to `/dist` folder
  - `npm run test` - test the project using jest
  - `npm run lint` - lint project with eslint
  - `npm run check-types` - run type checking with typescript
  - `npm run prettier` - Serve as a base `npm run format|check-format`, specifying [--ignore-path](https://prettier.io/docs/en/cli.html#--ignore-path) and files to be formatted
  - `npm run format` - Format the codebase
  - `npm run check-format` - Check files no formatted
  - `npm run validate` - Utility to run lint, check-format and check-types

[unreleased]: https://github.com/peterleiva/mongoose-matchers/compare/v1.0.0...HEAD
