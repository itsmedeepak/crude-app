const mongoose = require("mongoose")

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },


})

const UserdB = mongoose.model('userdb', schema);

module.exports = UserdB;