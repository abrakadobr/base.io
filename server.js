var express = require('express.io')
var app = express()
var less = require('express-less')
var config = require('./config/app')

app.use(express.static('public'))
app.use('/css', less(__dirname + '/templates/less'))

app.use(express.cookieParser())
app.use(express.session({secret: 'monkey'}))

app.http().io()

require('./app/routes')(app)
require('./app/io.routes')(app.io)
         
app.listen(config.PORT)
console.log('The magic happens on [' + config.PORT + ']')
