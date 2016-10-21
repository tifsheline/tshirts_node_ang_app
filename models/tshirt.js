var mongoose = require('mongoose')

tshirtSchema = mongoose.Schema({
  brand: {type:String, require: true},
  price: {type: Number, default: 5},
  size: String
}, {timestamps: true})

var Tshirt = mongoose.model('Tshirt', tshirtSchema)

module.exports = Tshirt
