const cors = require('cors')
const path = require('path')
const multer = require('multer')
const express = require('express')
const auth = require('json-server-auth')
const jsonServer = require('json-server')

const PORT = 8000
const ROUTER_PREFIX = '/api'
const resourcePermits = {
  // users: 664, //* User must be logged to write the resource. Everyone can read the resource.
  users: 660, //* User must be logged to write or read the resource.
  posts: 644 //* User must own the resource to write the resource. Everyone can read the resource.
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

// * Setup custom middlewares

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, 'public', 'assets', 'images'))
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } })

server.use('/public', express.static(path.join(__dirname, 'public')))

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
server.post(ROUTER_PREFIX + '/users/avatar', upload.single('avatar'), function (req, res) {
  const { file } = req

  const appUrl = `${req.protocol}://${req.get('host')}/`
  const avatarUrl = appUrl + path.join('public', 'assets', 'images', file.filename)

  if (file?.filename) {
    res.json({ avatarUrl })
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
