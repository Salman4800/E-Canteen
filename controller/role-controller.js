module.exports.addrole = function(req,res){
    // insert in Database RoleName
    console.log(req.body.roleName);
    res.json({msg:"Role Added",status:200,data:req.body})
}