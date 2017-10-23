'use strict'

const { Command } = require('@adonisjs/ace')
const Config = use('Config')
const { Nuxt, Builder } = require('nuxt')

class NuxtBuild extends Command {
  static get signature () {
    return 'nuxt:build'
  }

  static get description () {
    return 'Tell something helpful about this command'
  }

  async handle (args, options) {
    this.info('Dummy implementation for nuxt:build command')
  }
}

module.exports = NuxtBuild
