import { Router } from "express";
import { createProducts,  getProduct , getProducts } from "../controllers/products.mjs";

const router = Router()

router.post('/products', createProducts)
router.get('/products', getProducts )
router.get('/products/:id', getProduct)
router.put('/products')
router.delete('/products')

export default router