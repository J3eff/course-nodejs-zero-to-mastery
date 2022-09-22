const express = require("express")
const path = require("path")
const router = express.Router()

const basePath = path.join(__dirname, '../templates')


router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/carsform.html`)
})

router.post('/save', (req, res) => {
    console.log(req.body)
    const brand = req.body.brand
    const model = req.body.model
    const year = req.body.year

    console.log(`Carro adicionado com sucesso! Marca: ${brand}, Modelo: ${model} e Ano: ${year}`)

    res.sendFile(`${basePath}/carsform.html`)
})

module.exports = router