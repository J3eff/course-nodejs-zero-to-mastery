const express = require("express")
const exphbs = require("express-handlebars")
const conn = require('./db/conn')

const User = require('./models/User')
const Address = require('./models/Address')

const app = express()
app.use(express.json())
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(
    express.urlencoded({
        extended: true
    })
)

app.get('/users/create', (req, res) => {
    res.render('adduser')
})

app.post('/users/create', async (req, res) => {
    const name = req.body.name
    const occupation = req.body.occupation
    let newslatter = req.body.newslatter

    if (newslatter === 'on')
        newslatter = true
    else
        newslatter = false

    await User.create({ name, occupation, newslatter })

    res.redirect('/')
})

app.get('/users/:id', async (req, res) => {
    const id = req.params.id

    const user = await User.findOne({ raw: true, where: { id: id } })

    res.render('userview', { user })
})

app.post('/users/delete/:id', async (req, res) => {
    const id = req.params.id

    await User.destroy({ where: { id: id } })

    res.redirect('/')
})

app.get('/users/edit/:id', async (req, res) => {
    const id = req.params.id

    try {
        const user = await User.findOne({ include: Address, where: { id: id } })

        res.render('useredit', { user: user.get({ plain: true }) })
    } catch (error) {
        console.log(error)
    }
})

app.post('/users/update', async (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const occupation = req.body.occupation
    let newslatter = req.body.newslatter

    if (newslatter === 'on')
        newslatter = true
    else
        newslatter = false

    const userData = {
        id,
        name,
        occupation,
        newslatter
    }

    await User.update(userData, { where: { id: id } })

    res.redirect('/')
})

app.get('/', async (req, res) => {
    const users = await User.findAll({ raw: true })

    console.log(users)

    res.render('home', { users: users })
})

app.post('/address/create', async (req, res) => {
    const UserId = req.body.UserId
    const street = req.body.street
    const number = req.body.number
    const city = req.body.city

    const address = {
        UserId,
        street,
        number,
        city

    }

    await Address.create(address);

    res.redirect(`/users/edit/${UserId}`)
})

conn
    .sync()
    //.sync({force: true})
    .then(() => {
        app.listen(3000)
    }).catch(err => console.log(err))