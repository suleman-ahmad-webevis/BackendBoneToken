const {Router} = require('express')

const { Login, Register, getUsers } = require('../controllers/User');

const router = Router()

router.post('/register', Register)
router.post('/login', Login)
router.get('/login', Login)
router.get('/register', getUsers)

module.exports = router;