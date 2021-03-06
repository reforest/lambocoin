#!/usr/bin/env node

import minimist from 'minimist';
import { stripIndent } from 'common-tags';

import App from './app';

init()

function init () {
  const argv = minimist(process.argv.slice(2), {
    boolean: [
      'open'
    ],
    alias: {
      h: 'help',
      v: 'version'
    },
    default: {
      open: true
    }
  })
  const port = process.argv[2]

  if (argv.help) {
    return runHelp()
  }
  if (argv.version) {
    return runVersion()
  }
  return runApp(port)
}

function runHelp () {
  const message = stripIndent`
    lambocoin - 🙌 A Basic Cryptocurrency Built with Lotion based on awesome Tendermint.✨
    Usage:
        lambocoin <flags>
    Flags:
        -v, --version   Show current version
        -h, --help      Show usage information
  `
  console.log(message)
}

function runVersion () {
  console.log(require('../package.json').version)
}

function runApp(port=3000){
  App();
}