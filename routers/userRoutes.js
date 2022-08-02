const {Router} = require('express')
const { register_Get, login_Get, login_Post, logout_Get, register_Post } = require('../controllers/userController')

const router = Router()

router.get('/register', register_Get)
router.get('/login', login_Get)
router.post('/register', register_Post)
router.post('/login', login_Post)
router.get('/logout', logout_Get)

module.exports = router;