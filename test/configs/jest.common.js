const { resolve } = require("path")

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  rootDir: resolve(__dirname, "..", ".."),
  moduleDirectories: [
    "node_modules",
    resolve(__dirname, ".."),
    resolve(__dirname, "..", "..", "lib"),
  ],

  moduleNameMapper: {
    "^database/(.*)$": "<rootDir>/lib/utils/database/$1",
  },
}
