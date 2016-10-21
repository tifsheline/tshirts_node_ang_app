var
  express = require('express'),
  tshirtRouter = express.Router(),
  tshirtController = require('../controllers/tshirts.js')

tshirtRouter.get('/', tshirtController.index)
tshirtRouter.post('/', tshirtController.create)
tshirtRouter.get('/:id', tshirtController.showTshirt)
tshirtRouter.delete('/:id', tshirtController.destroyTshirt)

module.exports = tshirtRouter
