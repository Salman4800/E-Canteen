const productModel = require('../model/product-model')

// Add Product
module.exports.addProduct = function(req,res){
    let productName = req.body.productName
    let basePrice = req.body.offerPrice
    let offerPrice = req.body.basePrice
    let category = req.body.category
    let subCategory = req.body.subCategory
    let product = new productModel({
       productName : productName,
       basePrice : basePrice,
       offerPrice : offerPrice,
       category : category,
       subCategory : subCategory 
    })
    product.save(function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"Product Added",status:200,data:data})
        }
    })
}
//List Product
module.exports.listProduct = function(req,res){
    productModel.find().populate("category").populate("subCategory").exec(function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"Listed Products",status:200,data:data})
        }
    })
}
//Delete Product
module.exports.deleteProduct = function(req,res){
    let id = req.params.id
    productModel.deleteOne({_id:id},function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"Product Deleted",status:200,data:data})
        }
    })
}
//Update Product
module.exports.updateProduct = function(req,res){
    let id = req.body.id
    let productName = req.body.productName
    let basePrice = req.body.basePrice
    let offerPrice = req.body.offerPrice
    let category = req.body.category
    let subCategory = req.body.subCategory
    productModel.updateMany({_id:id},{productName:productName,basePrice:basePrice,offerPrice:offerPrice,category:category,subCategory:subCategory},function(err,data){
        if(err){
            res.json({msg:"Something Wrong", status:-1, data:err})
        }
        else{
            res.json({msg:"Product Updated",status:200,data:data})
        }
    })
}