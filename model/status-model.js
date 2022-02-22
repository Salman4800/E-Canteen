const mongoose = require('mongoose')

const statusSchema= new mongoose.Schema({
    status:{type:String}
})

const statusModel = mongoose.model("status",statusSchema)
module.exports = statusModel