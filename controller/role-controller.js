

const roleModel = require('../model/role-model');


module.exports.addrole = function(req,res){
    // insert in Database RoleName
    console.log(req.body.roleName);
    let role = new roleModel({
        roleName:req.body.roleName
    })
    role.save(function(err,success){
        if(err){
            console.log(err);
            //send mail to developer
        }
        else{
            res.json({msg:"Role Added",status:200,data:success})
        }
    })
}