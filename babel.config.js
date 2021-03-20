/**
 * @type {import('@babel/core').ConfigFunction}
 **/
module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV === "production")

  const presets = [
    [
      "@babel/preset-env",
      { targets: { node: "current" }, useBuiltIns: "usage" },
    ],
  ]

  return { presets }
}
