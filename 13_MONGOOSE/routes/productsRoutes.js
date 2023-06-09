const express = require('express')
const router = express.Router()

const ProductController = require('../controller/ProductController')

router.get('/create', ProductController.createProducts)
router.post('/create', ProductController.createProductsPost)
// router.post('/remove/:id', ProductController.removeProduct)
//router.post('/edit', ProductController.editProductPost)
//router.get('/edit/:id', ProductController.editProduct)
router.get('/:id', ProductController.getProduct)
router.get('/', ProductController.showProducts)

module.exports = router;