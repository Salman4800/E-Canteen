const statusModel = require("../model/status-model")
// Add Location
module.exports.addStatus = function(req,res){
    let status = "Succesfull"
    let statusAdd = new statusModel({
       status : status
    })
    statusAdd.save(function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"Status",status:200,data:data})
        }
    })
}
//List Location
module.exports.listStatus = function(req,res){
    statusModel.find(function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"Status",status:200,data:data})
        }
    })
}
//Delete Location
module.exports.deleteStatus = function(req,res){
    let id = req.params.id
    statusModel.deleteOne({_id:id},function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"Status Deleted",status:200,data:data})
        }
    })
}
//Update Location
module.exports.updateStatus = function(req,res){
    let id = req.body.id
    let status = req.body.status
    statusModel.updateMany({_id:id},{status:status},function(err,data){
        if(err){
            res.json({msg:"Something Wrong", status:-1, data:err})
        }
        else{
            res.json({msg:"Status Updated",status:200,data:data})
        }
    })
}