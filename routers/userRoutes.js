const {Router} = require('express')
const {login_Post, logout_Get, register_Post } = require('../controllers/userController')

const router = Router()

router.post('/register', register_Post)
router.post('/login', login_Post)
router.get('/logout', logout_Get)

module.exports = router;