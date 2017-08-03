
var Inventory = require('../models/inventory')

var getAll = (req, res) => {
  Inventory.find({})
  .then(inventories => {
    res.send(inventories)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var getOne = (req, res) => {
  Inventory.findById(req.params.id)
  .then(inventory => {
    res.send(inventory)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var create = (req, res) => {

}

var update = (req, res) => {
  Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then(updated => {
    res.send(updated)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var remove = (req, res) => {
  Inventory.findByIdAndRemove(req.params.id)
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
