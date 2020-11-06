const express = require('express')
const { response } = require('../../app')
const usersController = require('../controllers/users')
const router = express.Router()

const jwtAuth = require('../middleware/jwtAuth')

router.get('/all', usersController.all)
router.put('/edit', usersController.edit)
router.delete('/delete', usersController.delete)
// const users = require('../models/users')

// public data
// router.get('/', (req, res) => {
//     // login success
//     res.status(200).send({
//         message: "Sukses",
//         data: [users[0]]
//     })
// })

// private data
// router.get('/all', jwtAuth, (dataLogin, req ,res, next) => {
//     if(dataLogin.role === 'admin') {
//         // login success
//         res.status(200).send({
//             message: "Success",
//             data: users
//         })
//     } else {
//         res.status(401).send({
//             error: "Unanthorized!!"
//         })
//     }
// })

// get user
// router.get('/:username', jwtAuth, (dataLogin, req, res, next) => {
//     // try{
//     //     let [filtered] = User.filter(data => data.username == req.params.username)
//     //     return responses(res, 200, "Data ditemukan", filtered)
//     // } catch (error) {
//     //     console.log(error)
//     // }
//     const username = req.params.username
//     user.filter(user => user.username === username && dataLogin.username === username).map(user => {
//         return response(res, 200, "Sukses", [user])
//     })
//     return response(res, 400, "Invalid Parameter", [])
// })

// edit data
// router.post('/:username', jwtAuth, (dataLogin, req, res, next) => {
//     const username = req.params.username
//     const editUser = req.body
//     if (dataLogin.role === "admin") {
//         for (let i = 0; i < user.length; i++) {
//             if (user[i].username === username) {
//                 user[i] = editUser;
//                 return response(res, 200, "Edit Success", [user])
//             }
//         }
//     } else {
//         return response(res, 400, "Unauthorized, only admin that can edit", [])
//     }

// })

// delete
// router.delete('/:username', jwtAuth, (dataLogin, req, res, next) => {
//     const username = req.params.username
//     if (dataLogin.role === "admin") {
//         user = user.filter(i => i.username != username)
//         return response(res, 200, "Delete Success", [user])
//     }
//     return response(res, 400, "Unauthorized, only admin that can delete", [])
// })

// const responses = (res, code, message, data) => {
//     return res.status(code).send({
//         code,
//         message,
//         data
//     })
// }

module.exports = router