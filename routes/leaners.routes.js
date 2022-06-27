const express = require('express')
const router = express.Router()
const controller = require('../controller/learner.controller')

// Create Leaner
router.post('/create',controller.create)


// Login Leaner
router.post('/login',controller.login)

module.exports = router