const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    categoryName:{type:String},
    isActive:{type:Boolean}
})

const categoryModel = mongoose.model("category",categorySchema)
module.exports = categoryModel
