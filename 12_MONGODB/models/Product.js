const conn = require('../db/conn')

class Product {
    constructor(name, price, description, image) {
        this.name = name;
        this.price = price;
        this. image = image;
        this.description = description;
    }

    save() {
        const product = conn.db().collection('products').insertOne({
            name: this.name,
            price: this.price,
            image: this.image,
            description: this.description
        })

        return product;
    }

    static getProducts() {
        const products = conn.db().collection('products').find().toArray()

        return products;
    }
}

module.exports = Product