const express = require('express')
const router = express.Router()
const catController = require('../controllers/cat.controller')

router.post('/', catController.create)
router.get('/', catController.read)
router.put('/:id', catController.update)

module.exports = router