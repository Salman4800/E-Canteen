const mongoose = require('mongoose')

const orderDetailSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    order:{type:mongoose.Schema.Types.ObjectId,ref:"order"},
    quantity:{type:Number},
    price:{type:Number}
})

const orderDetailModel = mongoose.model("orderDetails",orderDetailSchema)
module.exports = orderDetailModel
