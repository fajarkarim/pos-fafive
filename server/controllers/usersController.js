
var User = require('../models/user')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

var getAll = (req, res) => {
  User.find({})
  .then(users => {
    res.send(users)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var getOne = (req, res) => {
  User.findById(req.params.id)
  .then(user => {
    res.send(user)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var create = (req, res) => {
  let user = new User({
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  })
}

var register = (req, res) => {
  let saltRounds = 10
  let salt = bcrypt.genSaltSync(saltRounds)
  let hash = bcrypt.hashSync(req.body.password, salt)
  let user = new User({
    email: req.body.email,
    password: hash,
    role: req.body.role
  })
  user.save()
  .then(created => {
    res.send(created)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var login = (req, res) => {
  User.findOne({ email: req.body.email })
  .then(user => {
    if (!user) {
      res.status(401).send(`email not registered`)
    } else {
      let decode = bcrypt.compareSync(req.body.password, user.password)
      if (!decode) {
        res.status(401).send(`wrong password`)
      } else {
        let token = jwt.sign({
          email: req.body.email
        }, `inirahasia`, { expiresIn: '5h'})
        res.send(token)
      }
    }
  })
}

var update = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then(updated => {
    res.send(updated)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var remove = (req, res) => {
  User.findByIdAndRemove(req.params.id)
  .then(removed => {
    res.send(removed)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}


module.exports = {
  getAll,
  getOne,
  update,
  remove,
  create,
  login,
  register
}
