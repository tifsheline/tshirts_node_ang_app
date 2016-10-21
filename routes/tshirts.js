var
  express = require('express'),
  tshirtRouter = express.Router(),
  tshirtController = require('../controllers/tshirts.js')

tshirtRouter.get('/api', tshirtController.index)
tshirtRouter.post('/api', tshirtController.create)

module.exports = tshirtRouter
