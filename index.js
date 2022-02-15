const express =require('express')
const app = express()
const mongoose = require('mongoose')

// Middleware
app.use(express.json())                       // mobile -> accept json data from request and set data into body 
app.use(express.urlencoded({extended:true}))  //web --> accept url encoded data from request and set data into body 

// Imported session from controller folder
const sessionController= require("./controller/session-controller")

// Imported role-controller from controller folder
const roleController = require("./controller/role-controller")

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

//Role
app.post("/roles",roleController.addrole)


// Server
app.listen(3000,function(){
    console.log("Server started on 3000");
})