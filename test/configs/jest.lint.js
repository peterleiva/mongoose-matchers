/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  ...require("./jest.common"),
  runner: "jest-runner-eslint",
  displayName: "lint",

  testMatch: ["<rootDir>/lib/**/*.ts", "<rootDir>/test/**/*.ts"],
}
