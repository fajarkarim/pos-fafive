'use strict'
const express = require('express');
const router = express.Router();
const transCtrl = require('../models/transactionController')

/* GET users listing. */
router.get('/', transCtrl.getAll);
router.get('/:id', transCtrl.getOne);
router.post('/', transCtrl.create);
router.put('/:id', transCtrl.update)
router.delete('/:id', transCtrl.remove)

module.exports = router;
