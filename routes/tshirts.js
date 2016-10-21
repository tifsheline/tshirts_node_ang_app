var
  express = require('express'),
  tshirtRouter = express.Router(),
  tshirtController = require('../controllers/tshirts.js')

tshirtRouter.get('/api', tshirtController.index)
tshirtRouter.post('/api', tshirtController.create)
tshirtRouter.get('/api/:id', tshirtController.showTshirt)
tshirtRouter.delete('/api/:id', tshirtController.destroyTshirt)

module.exports = tshirtRouter
