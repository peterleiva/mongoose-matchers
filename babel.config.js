const { resolve, join } = require("path")

/**
 * @type {import('@babel/core').ConfigFunction}
 **/
module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV === "production")

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: { node: "current" },
        useBuiltIns: "usage",
        corejs: "3.9",
      },
    ],
    "@babel/preset-typescript",
  ]

  const plugins = [
    [
      require.resolve("babel-plugin-module-resolver"),

      {
        root: ["./dist"],
        alias: {
          database: "./dist/utils/database",
        },
      },
    ],
  ]

  return { presets, plugins }
}
