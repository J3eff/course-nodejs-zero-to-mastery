const express = require('express')
const app = express()
const port = 3000 // variavel ambiente

app.listen(port, () => { console.log(`App rodando na porta ${port}`) })

app.get('/', (req, res) => {
    res.send('Olá Mundo!!')
})
