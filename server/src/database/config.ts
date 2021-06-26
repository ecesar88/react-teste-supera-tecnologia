import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()

const USER = process.env.USER ?? 'root'
const PASSWORD = process.env.PASSWORD ?? 'root'
const HOST = process.env.HOST ?? 'localhost'
const DATABASE = process.env.DATABASE

let db: mysql.Connection

const config = {
  user: USER,
  password: PASSWORD,
  host: HOST,
  database: DATABASE,
}

// Create database connection
function createDatabaseConnection() {
  if (!db) {
    db = mysql.createConnection(config)

    db.connect((err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Successfully connected to the database')
      }
    })
  }

  return db
}

export default createDatabaseConnection
