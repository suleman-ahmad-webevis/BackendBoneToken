const { Router } = require('express')
const { AddtoCart } = require('../controllers/cartController')

const router = Router()

router.post('/addtocart/:id', AddtoCart)

module.exports = router