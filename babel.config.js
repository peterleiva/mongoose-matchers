module.exports = api => {
  api.cache(() => process.env.NODE_ENV === "production")

  const presets = [["@babel/preset-env", { targets: { node: "current" } }]]

  return { presets }
}
