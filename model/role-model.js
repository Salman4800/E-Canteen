

const mongoose = require('mongoose')

// Schema
let roleSchema = mongoose.Schema({
    roleName:{
        type:String,
     //   unique: false
    }
}) 

// Model                      //Table Name in singular role
let roleModel = mongoose.model('role',roleSchema)
module.exports = roleModel