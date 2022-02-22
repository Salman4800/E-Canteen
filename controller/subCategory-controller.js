const subCategoryModel = require('../model/subCategory-model')
//Add
module.exports.addSubCategory = function(req,res){
    let subCategoryName = req.body.subCategoryName
    let isActive = req.body.isActive
    let category = req.body.category
    let subCategory = new subCategoryModel({
         subCategoryName : subCategoryName,
         isActive : isActive,
         category : category 
    })
    subCategory.save(function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"SubCategory Added",status:200,data:data})
        }
    })
}
//List
module.exports.listSubCategory = function(req,res){
    subCategoryModel.find().populate("category").exec(function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"List of SubCategories",status:200,data:data})
        }
    })
}
//Delete
module.exports.deleteSubCategory = function(req,res){
    let id = req.params.id
    subCategoryModel.deleteOne({ _id : id},function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"SubCategory Deleted",status:200,data:data})
        }
    })
}
//Update
module.exports.updateSubCategory = function(req,res){
    let id =req.body.id
    let subCategoryName = req.body.subCategoryName
    let isActive = req.body.isActive
    let category = req.body.category
    subCategoryModel.updateMany({_id:id},{subCategoryName:subCategoryName,isActive:isActive,category:category},function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"SubCategory Updated",status:200,data:data})
        }
    })
}