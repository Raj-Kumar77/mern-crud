const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fname:{type: String},
    lname:{type: String},
    email:{type: String},
    mobile:{type: Number},
    project:{type: String},
})

const User = mongoose.model('User',userSchema)

module.exports = User