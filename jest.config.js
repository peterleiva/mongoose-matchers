const { resolve } = require("path")
const { defaults: tsPreset } = require("ts-jest/presets")

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  testEnvironment: "node",
  preset: "@shelf/jest-mongodb",
  transform: {
    ...tsPreset.transform,
  },
  globals: {
    "ts-jest": {
      tsconfig: resolve(__dirname, "tsconfig.spec.json"),
    },
  },

  rootDir: resolve(__dirname, "lib"),
  moduleDirectories: ["node_modules", "lib"],
  moduleNameMapper: {
    "^database/(.*)$": "<rootDir>/utils/database/$1",
  },
}
