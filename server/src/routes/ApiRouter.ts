import express from 'express'
import { apiCheck, createTable } from '../controllers/ApiController'

const router = express.Router()

router.route('/').get(apiCheck).post(createTable)

export default router

// import express from 'express'
// import { apiCheck, createTable } from '../controllers/ApiController'

// const app = express()
// const router = express.Router()

// router.route(/)
// app.use('/apiCheck', apiCheck)
// app.use('/createTable', createTable)

// export default router
