const express = require('express')
const router = express.Router()
const catController = require('../controllers/cat.controller')

router.post('/', catController.create)


module.exports = router