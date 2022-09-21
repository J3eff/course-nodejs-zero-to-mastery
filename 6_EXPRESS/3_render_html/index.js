const path = require("path")
const express = require('express')
const app = express()
const basePath = path.join(__dirname, 'templates')

app.listen(3000, () => { console.log(`App rodando na porta ${3000}`) })

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})
