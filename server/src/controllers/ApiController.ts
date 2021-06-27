import { RequestType } from '../contracts/Request'
import createDatabaseConnection from '../database/config'
import dotenv from 'dotenv'

dotenv.config()
const VERSION = process.env.VERSION

const db = createDatabaseConnection()

const createTable: RequestType = async (req, res) => {
  const databaseName = req.body.databaseName
  const tableName = req.body.tableName

  // Check if table and database exists, if not, create them
  db.query(
    `
    SELECT COUNT(*)
    FROM information_schema.tables 
    WHERE table_schema = ?
    AND table_name = ?;
    `,
    [databaseName, tableName],
    (error, result) => {
      if (error) {
        res.status(500).send({
          status: false,
          data: {},
          error: {
            message: error,
          },
        })

        return
      }

      res.status(200).send({
        status: true,
        data: {},
        error: {},
      })
    }
  )
}

const apiCheck: RequestType = async (_req, res) => {
  res.status(200).send({
    status: 'Up and Running!',
    data: {
      version: VERSION,
    },
    error: {},
  })
}

export { createTable, apiCheck }
