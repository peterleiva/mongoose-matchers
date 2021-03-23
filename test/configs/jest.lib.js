const { resolve } = require("path")
const { defaults: tsPreset } = require("ts-jest/presets")

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  ...require("./jest.common"),

  testEnvironment: "node",
  displayName: "lib",
  preset: "@shelf/jest-mongodb",
  transform: {
    ...tsPreset.transform,
  },
  globals: {
    "ts-jest": {
      tsconfig: resolve(__dirname, "../../tsconfig.spec.json"),
      isolatedModules: true,
    },
  },
}
