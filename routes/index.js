//Este archivo es para importar todas mis rutas que provienen de mi carpeta "routes" en este caso sería "user"
const { Router } = require('express')
const router = Router()

const UserRoutes = require('./user')

router.use('/user', UserRoutes) //Esta es la ruta para el controlador de mi usuario (en este caso, para el registro del mismo).

module.exports = router