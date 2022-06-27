const router = require('express').Router()
const controller = require('../controller/courses.controller')

router.post('/create',controller.create)

router.get('/read',controller.findByCourseField)

router.get('/readById/:id',controller.findByCourseID)

router.put('/delete/:id',controller.deleteCourseByID)

module.exports = router