const express = require('express')
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// rotas - endpoints
app.post('/create/product', (req, res) => {
    const name = req.body.name;
    const price = req.body.price;

    res.json({ message: `O produto ${name} foi criado com sucesso!`})
})

app.get('/', (req, res) => {
    res.json({
        message: 'Primeira rota criada com sucesso!'
    })
})

app.listen(3000)