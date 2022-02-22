const categoryModel = require("../model/category-model")


// Add Category
module.exports.addCategory = function(req,res){
    let categoryName = req.body.categoryName
    let isActive = req.body.isActive
    let category = new categoryModel({
       categoryName : categoryName,
       isActive : isActive 
    })
    category.save(function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"Category Added",status:200,data:data})
        }
    })
}

// List Category
module.exports.listCategory = function(req,res){
    categoryModel.find(function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"Listed Categories",status:200,data:data})
        }
    })
}

//Delete category
module.exports.deleteCategory = function(req,res){
let id = req.params.id
categoryModel.deleteOne({_id:id},function(err,data){
    if(err){
        res.json({msg:"Something Wrong",status:-1,data:err})
    }
    else{
        res.json({msg:"Data Deleted",status:200,data:data})
    }
})
}

// Update Category
module.exports.updateCategory = function(req,res){
    let id = req.body.id
    let categoryName = req.body.categoryName
    let isActive = req.body.isActive
    categoryModel.updateMany({_id:id},{categoryName:categoryName,isActive:isActive},function(err,data){
        if(err){
            res.json({msg:"Something Wrong", status:-1, data:err})
        }
        else{
            res.json({msg:"Category Updated",status:200,data:data})
        }
    })
}