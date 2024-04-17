const mongoose = require('mongoose')
// const Schema = new mongoose.Schema

const usersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    admin: {
        type: Boolean,
        required: true,
    },
    feedback: {
        type: String,
        required: true,
    },
})

const Users = mongoose.model('Users', usersSchema)
module.exports = Users