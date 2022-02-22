const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName:{type:String},
    basePrice:{type:Number},
    offerPrice:{type:Number},
    category:{type:mongoose.Schema.Types.ObjectId,ref:"category"},
    subCategory:{type:mongoose.Schema.Types.ObjectId,ref:"subCategory"}
})

const productModel = mongoose.model("product",productSchema)
module.exports = productModel