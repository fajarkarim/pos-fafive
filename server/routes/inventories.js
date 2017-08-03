'use strict'
const express = require('express');
const router = express.Router();
const inventCtrl = require('../controllers/inventoriesController')

/* GET users listing. */
router.get('/', inventCtrl.getAll);
router.get('/category/:name', inventCtrl.sortBy)
router.get('/:id', inventCtrl.getOne);
router.post('/seed', inventCtrl.seed)
router.post('/', inventCtrl.create);
router.put('/:id', inventCtrl.update)
router.delete('/clear', inventCtrl.removeAll)
router.delete('/:id', inventCtrl.remove)

module.exports = router;
