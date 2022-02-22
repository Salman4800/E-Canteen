const cartModel = require("../model/cart-model")

// Insert Data
module.exports.addToCart = function (req, res) {
    let quantity = req.body.quantity
    let user = req.body.user

    let cart = new cartModel({
       quantity:quantity,
       user:user
    })
    cart.save(function (err, data) {
        if (err) {
            res.json({ msg: "Something Weong", status: -1, data: err })
        }
        else {
            res.json({ msg: "Added to cart succesfully", status: 200, data: data })
        }
    })

}
// List cart
module.exports.listcart = function (req, res) {
    cartModel.find().populate("user").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "Cart Details", status: 200, data: data })
        }
    })
}
// Delete cart
module.exports.deleteCart = function (req, res) {
    let id = req.params.id
    cartModel.deleteOne({ _id: id }, function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "Cart items  deleted", status: 200, data: data })
        }
    })
}
// Update cart
module.exports.updateCart = function (req, res) {
    let id = req.body.id
    let quantity = req.body.quantity
    let user = req.body.user
    cartModel.updateMany({_id:id},{quantity:quantity,user:user},function(err,data){
        if (err) {
            res.json({ msg: "Something Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "Data updated", status: 200, data: data })
        }
    })
}