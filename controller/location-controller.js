const locationModel = require('../model/location-model')

// Add Location
module.exports.addLocation = function(req,res){
    let Address = req.body.Address
    let Pincode = req.body.Pincode
    let location = new locationModel({
       Address : Address,
       Pincode : Pincode 
    })
    location.save(function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"Location Added",status:200,data:data})
        }
    })
}
//List Location
module.exports.listLocation = function(req,res){
    locationModel.find(function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"Listed Locations",status:200,data:data})
        }
    })
}
//Delete Location
module.exports.deleteLocation = function(req,res){
    let id = req.params.id
    locationModel.deleteOne({_id:id},function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"Location Deleted",status:200,data:data})
        }
    })
}
//Update Location
module.exports.updateLocation = function(req,res){
    let id = req.body.id
    let Address = req.body.Address
    let Pincode = req.body.Pincode
    locationModel.updateMany({_id:id},{Address:Address,Pincode:Pincode},function(err,data){
        if(err){
            res.json({msg:"Something Wrong", status:-1, data:err})
        }
        else{
            res.json({msg:"Location Updated",status:200,data:data})
        }
    })
}