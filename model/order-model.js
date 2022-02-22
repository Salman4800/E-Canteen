const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    total:{type:Number},
    status:{type:mongoose.Schema.Types.ObjectId,ref:"status"},
    location:{type:mongoose.Schema.Types.ObjectId,ref:"location"}
})

const orderModel = mongoose.model("order",orderSchema)
module.exports = orderModel
