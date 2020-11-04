const express = require('express')
const router = express.Router()

const jwtAuth = require('../middleware/jwtAuth')
const users = require('../models/users')

// public data
router.get('/', (req, res) => {
    // login success
    res.status(200).send({
        message: "Sukses",
        data: [users[0]]
    })
})

// private data
router.get('/all', jwtAuth, (dataLogin, req ,res, next) => {
    if(dataLogin.role === 'admin') {
        // login success
        res.status(200).send({
            message: "Success",
            data: users
        })
    } else {
        res.status(401).send({
            error: "Unanthorized!!"
        })
    }
})

// get user
router.get('/:username', jwtAuth, (dataLogin, req, res, next) => {
    try{
        let [filtered] = User.filter(data => data.username == req.params.username)
        return responses(res, 200, "Data ditemukan", filtered)
    } catch (error) {
        console.log(error)
    }
})

// edit data
router.post('/:username', jwtAuth, (dataLogin, req, res, next) => {
    const username = req.params.username
    const editUser = req.body

})

module.exports = router