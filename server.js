var
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  PORT = process.env.PORT || 3000

//connection to mongo db:
var mongoConnectionString = 'mongod://localhose/tshirts_node_ang_app'

mongoose.connect(mongoConnectionString, function(err) {
    console.log(err || "Connected to MOngoDB!")
})

//middleware

app.use(bodyParser.json())
app.use(express.static('public'))

app.listen(PORT, function(err) {
  console.log(err || "Server is running on " + PORT)
})
