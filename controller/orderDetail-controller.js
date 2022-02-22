const orderDetailModel = require('../model/orderDetail-model')

// Add Orders
module.exports.addOrderDetail = function(req,res){
    let user = req.body.user
    let order = req.body.order
    let quantity = req.body.quantity
    let price = req.body.price
    let orderDetail = new orderDetailModel({
      user :user,
      order :order,
      quantity :quantity,
      price :price
    })
    orderDetail.save(function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"Order Details Added Successfully",status:200,data:data})
        }
    })
}
//List Orders
module.exports.listOrderDetail = function(req,res){
    orderDetailModel.find().populate("user").populate("order").exec(function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"Listed Order Details",status:200,data:data})
        }
    })
}
//Delete Location
module.exports.deleteOrderDetail = function(req,res){
    let id = req.params.id
    orderDetailModel.deleteOne({_id:id},function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"Order Details Deleted",status:200,data:data})
        }
    })
}
//Update Location
module.exports.updateOrderDetail = function(req,res){
    let id = req.body.id
    let user = req.body.user
    let order = req.body.order
    let quantity = req.body.quantity
    let price = req.body.price
    orderDetailModel.updateMany({_id:id},{user :user,order :order,quantity :quantity,price :price},function(err,data){
        if(err){
            res.json({msg:"Something Wrong", status:-1, data:err})
        }
        else{
            res.json({msg:"Order Details Updated",status:200,data:data})
        }
    })
}