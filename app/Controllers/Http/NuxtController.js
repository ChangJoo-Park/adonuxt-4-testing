'use strict'

const Env = use('Env')
const Config = use('Config')
const { Nuxt, Builder } = require('nuxt')

class NuxtController {
  constructor () {
    let config = Config.get('nuxt')
    config.dev = Env.get('NODE_ENV') === 'development'
    this.nuxt = new Nuxt(config)

    // Start build process (only in development)
    if (config.dev) {
      console.log('config dev')
      new Builder(this.nuxt).build()
    }
  }

  async render ({ request, response }) {
    await this.nuxt.render(request.request, response.response)
  }
}

module.exports = new NuxtController()
