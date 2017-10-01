const routes = module.exports = require('next-routes')()

routes
  .add('homepage', '/')
  .add('category', '/category')
  .add('photo', '/photo/:id/:slug')
