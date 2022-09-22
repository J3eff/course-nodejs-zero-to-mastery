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

const basePath = path.join(__dirname, 'templates')

app.use('/users', usersRoute)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

