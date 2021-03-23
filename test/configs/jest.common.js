const { resolve } = require("path")

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  rootDir: resolve(__dirname, "..", ".."),
  moduleDirectories: [
    "node_modules",
    "<rootDir>/lib",
    resolve(__dirname, ".."),
  ],

  moduleNameMapper: {
    "^database/(.*)$": "<rootDir>/lib/utils/database/$1",
  },
}
