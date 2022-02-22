const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    quantity:{type:Number},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
})

const cartModel = mongoose.model("cart",cartSchema)
module.exports = cartModel