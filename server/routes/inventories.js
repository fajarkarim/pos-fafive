'use strict'
const express = require('express');
const router = express.Router();
const inventCtrl = require('../models/inventoriesController')

/* GET users listing. */
router.get('/', inventCtrl.getAll);
router.get('/:id', inventCtrl.getOne);
router.post('/', inventCtrl.create);
router.put('/:id', inventCtrl.update)
router.delete('/:id', inventCtrl.remove)

module.exports = router;
