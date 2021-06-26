import { RequestType } from '../contracts/Request'
import createDatabaseConnection from '../database/config'

const db = createDatabaseConnection()

const createTable: RequestType = async (req, res) => {
  const databaseName = req.body.databaseName
  const tableName = req.body.tableName

  // Check if table and database exists, if not create them
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

const getProduct: RequestType = async (_req, res) => {
  db.query('SELECT * FROM PRODUCTS', (error, results) => {
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
      data: results,
      error: {},
    })
  })
}

const createProduct: RequestType = async (req, res) => {
  const name = req.body.name
  const price = req.body.price
  const score = req.body.score
  const image = req.body.score

  if (!name || !price || !score || !image) {
    res.status(400).send({
      status: false,
      data: {},
      error: {
        message: 'Missing data',
      },
    })

    return
  }

  db.query(
    'INSERT INTO PRODUCTS VALUES (?, ?, ?, ?, ?)',
    [null, name, price, score, image],
    (error, results) => {
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
        status: false,
        data: results,
        error: {},
        message: 'Created successfully',
      })
    }
  )
}

const updateProduct: RequestType = async (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const price = req.body.price
  const score = req.body.score
  const image = req.body.score

  if (!id || !name || !price || !score || !image) {
    res.status(400).send({
      status: false,
      data: {},
      error: {
        message: 'Missing data',
      },
    })

    return
  }

  db.query(
    `
   UPDATE PRODUCTS
   SET
     name = ?,
     price = ?,
     score = ?,
     image = ?
   WHERE id = ?
   `,
    [name, price, score, image, id],
    (error, results) => {
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
        status: false,
        data: results,
        error: {},
        message: 'Updated successfully',
      })
    }
  )
}

const deleteProduct: RequestType = async (req, res) => {
  const id = req.body.id

  if (!id) {
    res.status(500).send({
      status: false,
      data: {},
      error: {
        message: 'Missing id',
      },
    })

    return
  }

  db.query('DELETE FROM PRODUCTS WHERE ID = ?', [id], (error, _result) => {
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
      status: false,
      data: {},
      error: {},
      message: 'Deleted successfully',
    })
  })
}

export { getProduct, createProduct, updateProduct, deleteProduct, createTable }
