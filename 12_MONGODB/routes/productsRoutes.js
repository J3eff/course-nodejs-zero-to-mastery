const express = require('express')
const router = express.Router()

const ProductController = require('../controller/ProductController')

router.post('/create', ProductController.createProductsPost)
router.get('/create', ProductController.createProducts)
router.get('/', ProductController.showProducts)

module.exports = router;