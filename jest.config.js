/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  projects: [
    "<rootDir>/test/configs/jest.lint.js",
    "<rootDir>/test/configs/jest.lib.js",
  ],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
    "jest-watch-select-projects",
  ],
}
