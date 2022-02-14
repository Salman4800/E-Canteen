const express =require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Imported session from controller folder
const sessionController= require("./controller/session-controller")

// Define in same file
app.get("/",function(req,res){
    res.write("Welcome to Home Page")
    res.end()
})

// Output using exported file
app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup)
app.post("/saveuser",sessionController.saveuser)

app.listen(3000,function(){
    console.log("Server started on 3000");
})