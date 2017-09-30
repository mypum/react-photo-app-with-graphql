const express = require('express')
const next = require('next')
const routes = require('./routes')

const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dir: './src',
  dev
})

const handler = routes.getRequestHandler(app)
const server = express()

app.prepare()
.then(() => {
  server.use(handler)

  server.use((err, req, res, next) => {
    if (err instanceof URIError) {
      res.status(400)
    }

    console.error(err)
    app.render(req, res, '/_error', {})
  })

})
.then(() => {
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
