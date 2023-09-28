const express = require('express')
const router = express.Router()
const detailController = require('../app/controllers/DetailController')

router.get('/:id', detailController.detail)

module.exports = router