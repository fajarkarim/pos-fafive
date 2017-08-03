'use strict'
const express = require('express');
const router = express.Router();
const usersCtrl = require('../models/usersController')

/* GET users listing. */
router.get('/', usersCtrl.getAll);
router.get('/:id', usersCtrl.getOne);
router.post('/', usersCtrl.create);
router.put('/:id', usersCtrl.update)
router.delete('/:id', usersCtrl.remove)

module.exports = router;
