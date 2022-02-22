


const express =require('express')
const app = express()
const mongoose = require('mongoose')

// Middleware
app.use(express.json())                       // mobile -> accept json data from request and set data into body 
app.use(express.urlencoded({extended:true}))  //web --> accept url encoded data from request and set data into body 

// Imported session from controller folder
const sessionController= require("./controller/session-controller")

// Imported controller JS from controller folder
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const categoryController = require("./controller/category-controller")
const subCategoryController = require("./controller/subCategory-controller")
const locationController = require("./controller/location-controller")
const productController = require("./controller/product-controller")
const cartController = require("./controller/cart-controller")
const statusController = require("./controller/status-controller")
const orderController = require("./controller/order-controller")
const orderDetailController = require("./controller/orderDetail-controller")

// Database
mongoose.connect('mongodb://localhost:27017/E-CANTEEN',function(err){
    if(err){
        console.log("Datbase Connection Failed....");
    }
    else{
        console.log("Database Connection Established....");
    }
});

// URL'S
// Defined in index file
app.get("/",function(req,res){
    res.write("Welcome to Home Page")
    res.end()
})

// Output using exported file
app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup)
app.post("/saveuser",sessionController.saveuser)

// Role urls
//Role insert
app.post("/roles",roleController.addrole)
// ROle showAll
app.get("/roles",roleController.getAllRoles)
// Delete specific
app.delete("/roles/:roleId",roleController.deleteRole)
// Update Specific
app.put("/roles",roleController.updateRole)

// User Urls
app.post("/users",userController.addUser)
app.get("/users",userController.listUser)
app.delete("/users/:id",userController.deleteUser)
app.put("/users",userController.updateUser)
// Login
app.post("/logins",userController.login)

// Category Urls
app.post("/categorys",categoryController.addCategory)
app.get("/categorys",categoryController.listCategory)
app.delete("/categorys/:id",categoryController.deleteCategory)
app.put("/categorys",categoryController.updateCategory)

//SubCategory
app.post("/subCategorys",subCategoryController.addSubCategory)
app.get("/subCategorys",subCategoryController.listSubCategory)
app.delete("/subCategorys/:id",subCategoryController.deleteSubCategory)
app.put("/subCategorys",subCategoryController.updateSubCategory)

//Location
app.post("/locations",locationController.addLocation)
app.get("/locations",locationController.listLocation)
app.delete("/locations/:id",locationController.deleteLocation)
app.put("/locations",locationController.updateLocation)

//Product
app.post("/products",productController.addProduct)
app.get("/products",productController.listProduct)
app.delete("/products/:id",productController.deleteProduct)
app.put("/products",productController.updateProduct)

//Cart
app.post("/carts",cartController.addToCart)
app.get("/carts",cartController.listcart)
app.delete("/carts/:id",cartController.deleteCart)
app.put("/carts",cartController.updateCart)

//status
app.post("/statuss",statusController.addStatus)
app.get("/statuss",statusController.listStatus)
app.delete("/statuss/:id",statusController.deleteStatus)
app.put("/statuss",statusController.updateStatus)

//order
app.post("/orders",orderController.addOrder)
app.get("/orders",orderController.listOrder)
app.delete("/orders/:id",orderController.deleteOrder)
app.put("/orders",orderController.updateOrder)

//orderDetails
app.post("/orderDetails",orderDetailController.addOrderDetail)
app.get("/orderDetails",orderDetailController.listOrderDetail)
app.delete("/orderDetails/:id",orderDetailController.deleteOrderDetail)
app.put("/orderDetails",orderDetailController.updateOrderDetail)

// Server
app.listen(3000,function(){
    console.log("Server started on 3000");
})