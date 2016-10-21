var Tshirt = require('../models/tshirt.js')

module.exports = {
  index,
  create,
  showTshirt,
  destroyTshirt
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

function showTshirt(req, res) {
  Tshirt.findById(req.params.id, function(err, tshirt) {
    if(err) {
      console.log(err);
    } else {
      res.json(tshirt)
    }
  })
}

function destroyTshirt(req, res) {
  Tshirt.findByIdAndRemove(req.params.id, function(err) {
    if(err) {
      console.log(err);
    } else {
      // res.redirect('/api')
      res.json({message: "Successfully deleted"})
    }
  })
}
