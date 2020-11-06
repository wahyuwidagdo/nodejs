// let users = [{
//     username: "admin",
//     password: "admin",
//     role: "admin"
// }, {
//     username: "user",
//     password: "user",
//     role: "user"
// }]

const conn = require('../config/database')

// query untuk login
const getUser = (username = null, password = null, cb = () => { }) => {
    try {
        // query search 
        // const query = `select * from user where username='${username}' and password='${password}'`
        conn.query("select role_id from users where username=? and password=? limit 1",
        [username, password],
        function (error, result, fields) {
            if (error) {
                console.log("Error : getUser.if - " + error)
                return cb("Internal Server Error", null)
            }
            return cb(null, result)
        })
    } catch (err) {
        console.log("Error : getUser.catch - " + err)
        return cb("Internal Server Error", null)
    }
}

// query untuk register
const insertUser = (role_id = null, username = null, password = null, cb = () => { }) => {
    try {
        conn.query("insert into users values(null, ?, ?, ?)",
        [role_id, username, password],
        function (error, result, fields) {
            if (error) {
                console.log("Error : getUser.if - " + error)
                return cb("Internal Server Error", null)
            }
            return cb(null, result)
        })
    } catch (err) {
        console.log("Error: insertUser.catch - " + err)
        return cb("Internal Server Error", null)
    }
}

// get all users
const getAllUsers = (cb = () => { }) => {
    try {
        conn.query("select * from users",
        function (error, result, fields) {
            if (error) {
                console.log("Error: getAllUsers.if - " + error)
                return cb("Internal Server Error", null)
            }
            return cb(null, result)
        })
    } catch (err) {
        console.log("Error: getAllUsers.catch - " + err)
        return cb("Internal Server Error", null)
    }
}

// edit user
const editUser = (username, password, cb = () => { }) => {
    try {
        conn.query("update users set username=?, password=? where username=?",
        [username, password],
        function (error, result, fields) {
            if (error) {
                console.log("Error: deleteUser.if - " + error)
                return cb("Internal Server Error", null)
            }
            return cb(null, result)
        })
    } catch (err) {
        console.log("Error: deleteUser.catch - " + err)
        return cb("Internal Server Error", null)
    }
}

// delete user
const deleteUser = (username = null, cb = () => { }) => {
    try {
        conn.query("delete from user where username=?",
        [username],
        function (error, result, fields) {
            if (error) {
                console.log("Error: deleteUser.if - " + error)
                return cb("Internal Server Error", null)
            }
            return cb(null, result)
        })
    } catch (err) {
        console.log("Error: deleteUser.catch - " + err)
        return cb("Internal Server Error", null)
    }
}

module.exports = { getUser, insertUser, getAllUsers, editUser, deleteUser }