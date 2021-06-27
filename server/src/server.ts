import express, { json, urlencoded } from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import createDatabaseConnection from './database/config'
import ProductsRouter from './routes/ProductsRouter'
import ApiRouter from './routes/ApiRouter'

dotenv.config()
const app = express()

const PORT = process.env.PORT ?? 8080
const HOST = process.env.HOST ?? 'localhost'

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(helmet())
app.use(morgan('dev'))

app.use('/products', ProductsRouter)
app.use('/api', ApiRouter)

app.listen(PORT, () => {
  createDatabaseConnection()
  console.log(`Server up and running on ${HOST}:${PORT}`)
})
