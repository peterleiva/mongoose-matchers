#!/usr/bin/env node

const shell = require("shelljs")
const { resolve } = require("path")

if (!shell.exec("command -v node").to("/dev/null").stdout) {
  shell.echo("Node is not installed")
  shell.exit(1)
}

const nodeModules = resolve(__dirname, "../node_modules")

shell.exec(
  `node --inspect-brk ${nodeModules}/.bin/jest --watch --no-cache --runInBand`
)
