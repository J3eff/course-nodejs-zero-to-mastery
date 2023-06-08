const Product = require('../models/Product')

module.exports = class ProductController {
    static async showProducts(req, res) {
        const products = await Product.getProducts();

        res.render('products/all', { products })
    }

    static createProducts(req, res) {
        res.render('products/create')
    }

    static createProductsPost(req, res) {

        const name = req.body.name;
        const price = req.body.price;
        const image = req.body.image;
        const description = req.body.description;

        const product = new Product(name, price, description, image);
        product.save();

        res.redirect('/products')
    }
}