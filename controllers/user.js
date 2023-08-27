//Aquí importo mi modelo de usuario 
const User = require('../models/user')
const bcrypt = require('bcrypt')

const register = async (req, res) => { //el req es lo que el back recibe de la solicitud y res es la función que me permite responder
    const {
        firstName,
        lastName,
        email,
        password
    } = req.body

    if(!firstName || !lastName || !email || !password){
        return res.status(400).json({
            message: 'All fields are required'
        })
    }

    // const duplicate = await User.findOne({ where: { email }})

    // if(duplicate) {
    //     return res.status(400).json({
    //         message: 'This email already exist'
    //     })
    // }

    try {
        const hashPassword = await bcrypt.hashSync(password, 10) //el número sirve para saber que encpriptación usará
        console.log("fsnsbe")
        const newUser = await User.create({ 
            firstName,
            lastName,
            email,
            password: hashPassword
        })
        console.log("fsnsbe")

        return res.status(200).json({
            message: 'User create successfully',
            data: newUser
        })
    } catch (error) {
        return res.status(500).json({
            message: 'User didnt create',
            error
        })
    }
}

module.exports = {
    register
}