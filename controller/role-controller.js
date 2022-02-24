
// import roleModel from role-model folder
const roleModel = require('../model/role-model');
// Insert in DB
module.exports.addrole = function(req,res){
    // insert in Database RoleName
    console.log(req.body.roleName);
    let role = new roleModel({
        roleName:req.body.roleName
    })

    // Save Function For Insert
    role.save(function(err,success){
        if(err){
            res.json({msg:"Something went wrong",status:-1,data:err})
            //send mail to developer
        }
        else{
            res.json({msg:"Role Added",status:200,data:success})
        }
    })
 }
// ShowAll in Db
module.exports.getAllRoles = function(req,res){
    // Find for listing
    roleModel.find(function(err,success){
        if(err){
            res.json({
                msg:"Something Went Wrong",
                status:-1,
                data:err
            })    
        }
        else{
            res.json({
                msg:"Data Listed",
                status:200,
                data:success
            })
        }
    })
}
// Delete specific in Db
module.exports.deleteRole = function(req,res){
    let roleId = req.params.roleId
    // deleteOne for specific delete
    roleModel.deleteOne({"_id":roleId},function(err,data){
        if(err){
            res.json({
                msg:"Something Went Wrong",
                status:-1,
                data:err
            })    
        }
        else{
            res.json({
                msg:"Data Deleted",
                status:200,
                data:data
            })
        }
    })
}
// Update in DB
module.exports.updateRole = function(req,res){
    let roleId= req.body.roleId
    let roleName = req.body.roleName
    roleModel.updateOne({_id:roleId},{roleName:roleName},function(err,data){
        if(err){
            res.json({
                msg:"Something Went Wrong",
                status:-1,
                data:err
            })    
        }
        else{
            res.json({
                msg:"Data Updated",
                status:200,
                data:data
            })
        }
    })
}
