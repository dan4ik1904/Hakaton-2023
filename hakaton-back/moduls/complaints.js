const mongoose = require('mongoose')
// const Schema = new mongoose.Schema

const complaintsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    creater: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
    },
    feedback: {
        type: String,
        required: true,
    },
})

const Complaints = mongoose.model('Complaints', complaintsSchema)
module.exports = Complaints