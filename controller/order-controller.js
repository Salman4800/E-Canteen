const orderModel = require('../model/order-model')

// Add Orders
module.exports.addOrder = function(req,res){
    let user = req.body.user
    let total = req.body.total
    let status = req.body.status
    let location = req.body.location
    let order = new orderModel({
      user :user,
      total :total,
      status :status,
      location :location  
    })
    order.save(function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"Ordered Successfully",status:200,data:data})
        }
    })
}
//List Orders
module.exports.listOrder = function(req,res){
    orderModel.find().populate("user").populate("status").populate("location").exec(function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"Listed Orders",status:200,data:data})
        }
    })
}
//Delete Location
module.exports.deleteOrder = function(req,res){
    let id = req.params.id
    orderModel.deleteOne({_id:id},function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"Order Deleted",status:200,data:data})
        }
    })
}
//Update Location
module.exports.updateOrder = function(req,res){
    let id = req.body.id
    let user = req.body.user
    let total = req.body.total
    let status = req.body.status
    let location = req.body.location
    orderModel.updateMany({_id:id},{user :user,total :total,status :status,location :location},function(err,data){
        if(err){
            res.json({msg:"Something Wrong", status:-1, data:err})
        }
        else{
            res.json({msg:"Order Updated",status:200,data:data})
        }
    })
}