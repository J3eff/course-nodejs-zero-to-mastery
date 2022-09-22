const path = require("path")
const express = require("express")
const app = express()
const usersRoute = require('./users')

app.listen(3000, () => { console.log(`App rodando na porta ${3000}`) })

// ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

// arquivos estáticos
app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates')

app.use('/users', usersRoute)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.use(function (req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`)
})
