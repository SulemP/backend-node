const express = require('express')
const cors = require('cors')
const { connectDB } = require('./database/connection')
const routes = require('./routes/index')

//Conexión a la base de datos

connectDB()

//Creación de la aplicación
const app = express()
const PORT = 3001

//Configurar cors
app.use(cors())

//Configurar body parse. Para codificar y decodificar la comunicación JSON
app.use(express.json())
app.use(express.urlencoded({ extended:true }))

//Configurar rutas
app.use('/api', routes)

//Crear servidor y ponerlo a escuchar
app.listen(PORT, () => {
    console.log("server running on port " + PORT)
})