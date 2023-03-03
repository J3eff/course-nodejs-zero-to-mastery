const express = require('express')
const router = express.Router()
const ToughtController = require('../controllers/ToughtController')

router.get('/dashboard', ToughtController.dashboard)
router.get('/', ToughtController.showToughts)


module.exports = router;