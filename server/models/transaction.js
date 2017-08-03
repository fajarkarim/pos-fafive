
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var transactionSchema = new Schema({
  total: {
    type: Number
  },
  item_list: [{ type: Schema.Types.ObjectId, ref: 'inventory' }],
  invoice: {
    type: String
  }
}, { timestamps: true })

var Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction
