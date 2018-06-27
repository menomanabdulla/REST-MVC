const router = require('express').Router()
const movieController = require('../controller/moviesController')
//all movie get route
router.get('/',movieController.getallController)

//all movie post route
router.post('/',movieController.postController)

//single movie get
router.get('/:id',movieController.getSingleController)
//single movie patch
router.patch('/:id',movieController.patchController)
//single movie delete
router.delete('/:id',movieController.deleteController)

module.exports = router