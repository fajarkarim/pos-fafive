
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
  email: {
    type: String
  },
  password: {
    type: String
  },
  role: {
    type: String
  }
})

var User = mongoose.model('User', userSchema)

module.exports = User
