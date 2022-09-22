const path = require("path")
const express = require('express')
const app = express()

const basePath = path.join(__dirname, 'templates')

const checkAuth = function (req, res, next) {
    req.authStatus = true

    if (req.authStatus) {
        console.log('Está logado, pode continuar!')
        next()
    } else {
        console.log('Não está logado, faça o login para continuar!')
        next()
    }    
}

app.use(checkAuth)
app.listen(3000, () => { console.log(`App rodando na porta ${3000}`) })

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})
