
var Transaction = require('../models/transaction')

var getAll = (req, res) => {
  Transaction.find({})
  .then(transactions => {
    res.send(transactions)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var getOne = (req, res) => {
  Transaction.findById(req.params.id)
  .then(transaction => {
    res.send(transaction)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var create = (req, res) => {

}

var update = (req, res) => {
  Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then(updated => {
    res.send(updated)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var remove = (req, res) => {
  Transaction.findByIdAndRemove(req.params.id)
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
  create
}
