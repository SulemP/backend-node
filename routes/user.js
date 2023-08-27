const express = require('express')
const router = express.Router() //Esto me va a permitir realizar las peticiones
const UserController = require('../controllers/user')

router.post('/register', UserController.register)
router.get('/prueba', (req, res) => {
    res.status(200).json({
        message: 'My test'
    })
})

module.exports = router