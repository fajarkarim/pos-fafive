
var Inventory = require('../models/inventory')
var seedData = require('./seed')

var getAll = (req, res) => {
  Inventory.find({})
  .then(inventories => {
    res.send(inventories)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var sortBy = (req, res) => {
  Inventory.find({ category: req.params.name })
  .sort('-createdAt')
  .exec()
  .then(invents => {
    res.send(invents)
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
  var invent = new Inventory({
    total: req.body.total,
    item_list: req.body.item_list,
  })
  invent.save()
  .then(saved => {
    res.send(saved)
  })
  .catch(err => {
    res.status(500).send(err)
  })
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

var seed = (req, res) => {
  seedData.forEach(d => {
    let invent = new Inventory({
      item: d.item,
      category: d.category,
      price: d.price,
      stock: d.stock
    })
    invent.save()
    .then(created => {
      res.send(created)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  })
}

var removeAll = (req, res) => {
  Inventory.remove({})
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
  seed,
  removeAll,
  sortBy
}
