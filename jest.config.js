const { resolve } = require("path");
const { jsWithTs: tsPreset } = require("ts-jest/presets");

module.exports = {
  preset: "@shelf/jest-mongodb",
  transform: {
    ...tsPreset.transform,
  },
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      tsconfig: resolve(__dirname, "tsconfig.test.json"),
    },
  },

  rootDir: resolve(__dirname, "lib"),
  moduleDirectories: ["node_modules", "lib"],
  moduleNameMapper: {
    "^database/(.*)$": "<rootDir>/utils/database/$1",
  },
};
