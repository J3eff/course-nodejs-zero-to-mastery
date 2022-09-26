const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

app.use(express.static("public"))

const products = [
    {
        id: "1",
        title: "Livro",
        price: 12.99
    },
    {
        id: "2",
        title: "Cadeira",
        price: 120.00
    },
    {
        id: "3",
        title: "Lâmpada",
        price: 12.99
    }
]

app.get("/product/:id", (req, res) => {    
    const product = products.find(p => p.id == req.params.id)

    const isFound = product != undefined ? true : false

    res.render("product", { product, isFound })
})

app.get("/", (req, res) => {
    res.render("home", { products })
})

app.listen(3000)