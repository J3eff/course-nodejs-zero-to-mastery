const express = require("express")
const path = require("path")
const app = express()
const port = 5000
const carsRoute = require("./cars")

const basePath = path.join(__dirname, 'templates')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(port, () => { console.log(`App rodando na porta ${port}`) })
app.use(express.static('public'))

app.use('/cars', carsRoute)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})