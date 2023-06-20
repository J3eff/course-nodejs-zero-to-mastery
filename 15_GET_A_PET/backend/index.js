const express = require('express')
const cors = require('cors')
const conn = require('./db/conn')

const app = express()

//Config JSON response
app.use(express.json())

// Solve CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000'}))

//Public folder for images
app.use(express.static('public'))

// Routes


app.listen(5000)