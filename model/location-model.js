const mongoose = require('mongoose')

const locationSchema= new mongoose.Schema({
    Address:{type:String},
    Pincode:{type:Number,required:true}
})

const locationModel = mongoose.model("location",locationSchema)
module.exports = locationModel