const express = require('express')

const userControler = require('../controllers/UserController')
const projectController = require('../controllers/projectController')

const router = express.Router()
const jwtMiddle = require('../middlewares/jwtMiddleware')
const multermiddle = require('../middlewares/multermiddlewareConfig')

//user
router.post('/login', userControler.userLogin)
router.post('/reg', userControler.userRegister)
router.put('/updateprofile', jwtMiddle, multermiddle.single('profile'), userControler.profileUpdate)

//projects
router.post('/addproject', jwtMiddle, multermiddle.single('image'), projectController.addProjects)
router.get('/allprojects', projectController.allProject)
router.get('/userprojects', jwtMiddle, projectController.userProject)
router.get('/getproject/:id', jwtMiddle, projectController.getProjectWithId)
router.delete('/deleteproject/:id', jwtMiddle, projectController.deleteProject)
router.put('/editproject/:id', jwtMiddle, multermiddle.single('image'), projectController.updateProject)

module.exports = router