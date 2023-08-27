const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/mi_primer_backend")
        console.log('Database connected success')
    } catch (error) {
        throw new Error('Error connecting to database')
    }
}

module.exports = {
    connectDB
}