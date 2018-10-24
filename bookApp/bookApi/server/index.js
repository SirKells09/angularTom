require('dotenv').config();

var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var sequelize = require('./db')
var book = require('./controllers/bookcontroller')

app.use(bodyParser.json())
app.use(require('./middleware/headers'))
app.use('/book', book)