'use strict'
const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/usersController')

/* GET users listing. */
router.get('/', usersCtrl.getAll);
router.get('/:id', usersCtrl.getOne);
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login)
router.post('/register', usersCtrl.register)
router.put('/:id', usersCtrl.update)
router.delete('/:id', usersCtrl.remove)

module.exports = router;
