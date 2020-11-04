const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const users = require('./routes/user')
const auth = require('./routes/auth')

app.use(cors())

// create application/json parser
// const jsonParser = bodyParser.json()
app.use(bodyParser.json())

// create application/x-www-form-urlencoded parser
// const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({ extended: true }))

// serve static files
app.use(express.static("public"))

// routing
app.use('/auth', auth)
app.use('/users', users)

// error handler
app.use((req, res, next) => {
    const error = new Error("Error occure!!")
    next(error)
})
app.use((error, req, res, next) => {
    res.status(500).json({
        error: error.message
    })
})

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: "Hello World!!"
//     })
//     next()
// })

// Mendefinisikan/mendeklarasikan Users
// let users = [
//     {
//         username : "admin",
//         email : "admin@admin.com",
//         password : "admin",
//     },
//     {
//         username : "admin2",
//         email : "admin2@admin.com",
//         password : "admin2",
//     }
// ]

// Buat fungsi untuk get users
// app.get("/users", (req, res) => {
//     res.send(users)
// })

// // fungsi untuk add/register user
// app.post("/register", (req, res) => {
//     users.push(req.body)
//     res.send({
//         message: "200 Succeess"
//     })
// })

// fungsi edit
// app.post("/edit/:username", (req, res) => {
//     const username = req.params.username
//     const params = req.body
//     for (let i = 0; i < users.length; i++) {
//         let editUser = users[i]
//         if (editUser.username === username) {
//             user[i] = params
//             break
//         }
//     }

//     res.send({
//         message: `User edited : ${req.params.username}!`
//     })
// })

// fungsi delete
// app.delete("/users/:username", (req, res) => {
//     const username = req.params.username
//     user = user.filter(i => {
//         if (i.username !== username) {
//             return true
//         }
//         return false
//     })
//     res.send({
//         message: `Delete user : ${req.params.username}!`
//     })
// })

// app.get("/test", (req, res) => {
//     res.send({
//         message: "Hello /!!"
//     })
// })

// app.get("/user/:userId", (req, res) => {
//     res.send({
//         message: `Hello ${req.params.userId}!!`
//     })
// })

// POST /login gets urlencoded bodies
// app.post("/login", (req, res) => {
//     console.log("req: ", req.body);
//     res.send({
//         message: "Hello /!!"
//     })
// })

// POST /register gets JSON bodies
// app.post("/register", (req, res) => {
//     console.log("req: ", req.body);
//     res.send({
//         message: "Hello /!!"
//     })
// })

module.exports = app