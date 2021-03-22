#!/usr/bin/env bash

if ! command -v node >/dev/null 2>&1; then
	echo "Node is not installed"
	exit 1
fi

node --inspect-brk node_modules/.bin/jest --watch --no-cache --runInBand
