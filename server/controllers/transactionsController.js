
var Transaction = require('../models/transaction')
var Inventory = require('../models/inventory')

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

// create transaction and update the stock
var checkout = (req, res) => {
  let transaction = new Transaction({
    total: req.body.total,
    item_list: req.body.item_list,
  })
  transaction.save()
  .then(created => {
    let items = req.body.item_list
    items.forEach(item => {
      let itemID = item.split(',')[0]
      let stock = item.split(',')[1]
      Inventory.findById(itemID)
      .then(i => {
        i.stock = i.stock - parseInt(stock)
        i.save()
        .then(updated => {
          res.send(updated)
        })
        .catch(err => {
          res.status(500).send(err)
        })
      })
      .catch(err => {
        res.status(500).send(err)
      })
    })
    res.send(created)
  })
  .catch(err => {
    res.status(500).send(err)
  })
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

var removeAll = (req, res) => {
  Transaction.remove({})
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
  checkout,
  removeAll
}
