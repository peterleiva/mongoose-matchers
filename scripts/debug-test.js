#!/usr/bin/env node

const shell = require("shelljs")
const { resolve } = require("path")

if (!shell.exec("command -v node").to("/dev/null").stdout) {
  shell.echo("Node is not installed")
  shell.exit(1)
}

const jestBin = resolve(__dirname, "../node_modules", ".bin", "jest")

shell.exec(`node --inspect-brk ${jestBin} --watch --no-cache --runInBand`)
