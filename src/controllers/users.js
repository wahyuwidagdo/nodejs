const { response } = require('express')
const jwt = require('jsonwebtoken')
// const users = require('../models//users')

const userModel = require('../models//users')

const key = process.env.JWT_KEY

exports.all =  (dataLogin, req, res, next) => {
    if (dataLogin.role === "admin") {
        try {
            userModel.getAllUsers((error, userData) => {
                if (error) return res.status(401).send({error})
                return response(res, 200, "Success", userData)
            })
        } catch (err) {
            res.status(401).send({
                err: "Unauthorized!!"
            })
        }
    }
}

exports.edit = (dataLogin, req, res) => {
    const username = req.params.username
    const editData = req.body
    if (dataLogin.role === "admin") {
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === email) {
                users[i] = editData
                return response(res, 200, "Data berhasil di update", [users])
            }
        }
    } else if (dataLogin.role === "employee") {
        if (dataLogin.username === username) {
            for (let i = 0; i < users.length; i++) {
                if (users[i].username === username) {
                    users[i] = editData
                    return response(res, 200, "Sukses", [users])
                }
            }
        }
    }
    return response(res, 400, "Unauthorized", [])
}

exports.delete = (req, res) => {
    const {username} = req.params.username
    if (dataLogin.role === "admin") {
        userModel.deleteUser(username, (error, data) => {
            if (error) return res.status(401).send({error})
            return response(res, 200, "Data telah dihapus", [])
        })
    } else {
        return response (res, 401, "Unauthorized", [])
    }
}