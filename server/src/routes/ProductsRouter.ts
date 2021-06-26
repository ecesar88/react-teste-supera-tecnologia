import express from 'express'
import {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  createTable,
} from '../controllers/ProductsController'

const router = express.Router()

router
  .route('/')
  .get(getProduct)
  .post(createProduct)
  .put(updateProduct)
  .delete(deleteProduct)

export default router
