const path = require('path')
const multer = require('multer')
const auth = require('json-server-auth')
const jsonServer = require('json-server')

const PORT = 8000
const ROUTER_PREFIX = '/api'
const resourcePermits = {
  users: 400,
  posts: 644
}

const dbPath = path.join(__dirname, 'database', 'db.json')
const permissionsConfig = Object.entries(resourcePermits).reduce((acc, [key, value]) => {
  acc[`${ROUTER_PREFIX.slice(1)}/${key}`] = value
  return acc
}, {})

//* Setup server
const server = jsonServer.create()
const router = jsonServer.router(dbPath)
const middlewares = jsonServer.defaults()
const upload = multer({ dest: 'uploads/', limits: { fileSize: 10 * 1024 * 1024 } })
const permissions = auth.rewriter(permissionsConfig)

//* Delay requests
const delayRequests = async (req, res, next) => {
  await new Promise((res) => setTimeout(res, 800))
  next()
}

server.use(delayRequests)

// * Custom middleware
server.post('/profile', upload.single('avatar'), function (req, res, next) {
  const { file } = req

  if (file?.filename !== undefined) {
    res.json({ fileName: file.filename })
    next()
  } else {
    res.status(400).json({ error: 'File upload failed' })
  }
})

//* Authorization
server.db = router.db
server.use(permissions)
server.use(auth)

server.use(middlewares)
server.use(jsonServer.bodyParser)

//* Routing
server.use(ROUTER_PREFIX, router)

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`The server has been started on port ${PORT}`)
})
