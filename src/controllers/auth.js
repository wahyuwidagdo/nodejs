const jwt = require('jsonwebtoken')

const userModel = require('../models/users')

const key = process.env.JWT_KEY

exports.login = (req, res) => {
    const { username, password } = req.body

    try {
        userModel.getUser(username, password, (error, data) => {
            try {
                if (error) return res.status(500).send({ error })

                // login success
                if (data.length) {
                    const dataUser = {
                        username,
                        role: data[0].role
                    }

                    // create jwt token
                    const token = jwt.sign(dataUser, key, { expiresIn: '1h' })

                    return res.status(200).send({
                        message: "User Found!!",
                        data: [{ username, token }]
                    })
                }
                return res.status(400).send({ error: "Invalid username or password!!" })
            } catch (err) {
                console.log("ERROR: controllerLogin.userModel.catch - ")
                return res.status(500).send({ error: "Internal Server Error" })
            }
        })
    } catch {
        console.log("ERROR: controllerLogin.catch - ")
        return res.status(500).send({ error: "Internal Server Error" })
    }
}

exports.register = (req, res) => {
    const {role_id, username, password} = req.body

    try {
        userModel.insertUser(role_id, username, password, (error, data) => {
            try {
                if (error) { return res.status(500).send({ error }) }

                // register success
                    return res.status(200).send({
                        message: "Register Success",
                        data: [{username, password, role_id}]
                    })
                return res.status(400).send({ error: "Error gagal register" })
            } catch (err) {
                console.log("ERROR: constrollerRegister.userModel.catch - ")
                return res.status(400).send({ error: "Internal Server Error" })
            }
        })
    } catch {
        console.log("ERROR: controllerRegister.catch - ")
        return res.status(500).send({ error: "Internal Server Error" })
    }
}