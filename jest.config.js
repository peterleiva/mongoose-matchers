const path = require("path")

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  ...require("./test/configs/jest.common"),
  coverageDirectory: "<rootDir>/coverage",
  collectCoverageFrom: ["lib/**/*.ts"],

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
