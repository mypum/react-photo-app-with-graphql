const routes = module.exports = require('next-routes')()

routes
.add('homepage', '/')
.add('photo', '/photo/:id')
