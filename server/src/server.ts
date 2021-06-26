import express, { json, urlencoded } from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import createDatabaseConnection from './database/config'
import ProductsRouter from './routes/ProductsRouter'

dotenv.config()
const app = express()

const PORT = process.env.PORT ?? 8080

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(helmet())
app.use(morgan('dev'))

// Products router
app.use('/products', ProductsRouter)

app.listen(PORT, () => {
  createDatabaseConnection()
  console.log(`Server listening on ${PORT}`)
})
