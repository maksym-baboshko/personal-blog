const cors = require('cors')
const path = require('path')
const multer = require('multer')
const auth = require('json-server-auth')
const jsonServer = require('json-server')

const PORT = 8000
const ROUTER_PREFIX = '/api'
const resourcePermits = {
  users: 664,
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
const permissions = auth.rewriter(permissionsConfig)

const upload = multer({
  dest: path.join(__dirname, 'uploads'),
  limits: { fileSize: 10 * 1024 * 1024 }
})

//* CORS setup
server.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    preflightContinue: false,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
  })
)

server.options('*', cors())

//* Delay requests
const delayRequests = async (req, res, next) => {
  await new Promise((res) => setTimeout(res, 800))
  next()
}

server.use(delayRequests)

// * Custom middleware
server.post('/profile', upload.single('avatar'), function (req, res, next) {
  const { file } = req

  if (file?.filename) {
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
