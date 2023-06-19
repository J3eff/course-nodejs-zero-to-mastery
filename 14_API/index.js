const express = require('express')
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// rotas - endpoints
app.post('/create/product', (req, res) => {
    const name = req.body.name;
    const price = req.body.price;

    if (!name)
        res.status(422).json({ message: 'O campo nome é obrigatório!' })

    res.status(201).json({ message: `O produto ${name} foi criado com sucesso!` })
})

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Primeira rota criada com sucesso!' })
})

app.listen(3000)