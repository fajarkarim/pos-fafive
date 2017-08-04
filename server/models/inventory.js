'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var inventorySchema = new Schema({
  item: {
    type: String
  },
  category: {
    type: String
  },
  price: {
    type: Number
  },
  total: {
    type: Number
  }
}, { timestamps: true })

var Inventory = mongoose.model('Item', inventorySchema)

module.exports = Inventory
