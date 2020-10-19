#!/usr/bin/env node

var echo = require("../lib/echo");

console.log(echo(process.argv.join(' ')));