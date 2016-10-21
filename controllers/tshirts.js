var Tshirt = require('../models/tshirt.js')

module.exports = {
  index,
  create
}

function index(req, res) {
  Tshirt.find({}, function(err, tshirts) {
    if(err) {
      console.log(err);
    } else {
      res.json(tshirts)
    }
  })
}

function create(req, res) {
  Tshirt.create(req.body, function(err, tshirt) {
    if(err) {
      console.log(err)
    } else {
      res.json(tshirt)
    }
  })
}
