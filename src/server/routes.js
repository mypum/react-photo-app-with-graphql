const routes = module.exports = require('next-routes')()

routes
  .add('homepage', '/')
  .add('category', '/category/:slug')
  .add('photo', '/category/:category/:id/:slug')
