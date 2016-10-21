var
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  tshirtRoutes = require('./routes/tshirts.js')
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  PORT = process.env.PORT || 3000

//connection to mongo db:
var mongoConnectionString = 'mongodb://localhost/tshirts_node_ang_app'

mongoose.connect(mongoConnectionString, function(err) {
    console.log(err || "Connected to MongoDB!")
})

//middleware

app.use(bodyParser.json())
app.use(express.static('public'))
app.use('/api', tshirtRoutes)
app.use('/', function(req, res) {
  res.sendFile('index.html', {root: __dirname})
})

app.listen(PORT, function(err) {
  console.log(err || "Server is running on " + PORT)
})
