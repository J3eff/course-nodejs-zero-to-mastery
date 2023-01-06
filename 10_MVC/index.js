const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const conn = require('./db/conn')

const Task = require('./models/Task')

const tasksRoutes = require('./routes/tasksRoutes')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Definindo a biblioteca que faz o parsing dos conteúdos da requisições que o express recebe
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static('public'))

app.use('/tasks', tasksRoutes)

conn
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch(err => console.log(err))

