
const userModel = require("../model/user-model")
const bcrypt = require("bcrypt")

// Insert Data
module.exports.addUser = function (req, res) {
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let password = req.body.password
        // Encrypt Password
        let encPassword = bcrypt.hashSync(password,10)
    let role = req.body.role

    let user = new userModel({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: encPassword,
        role: role
    })
    user.save(function (err, data) {
        if (err) {
            res.json({ msg: "Something Weong", status: -1, data: err })
        }
        else {
            res.json({ msg: "Data Added Succesfully", status: 200, data: data })
        }
    })

}

// List Data
module.exports.listUser = function (req, res) {
    userModel.find().populate("role").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "Data Listed", status: 200, data: data })
        }
    })
}

// Delete USer
module.exports.deleteUser = function (req, res) {
    let id = req.params.id
    userModel.deleteOne({ _id: id }, function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "Data deleted", status: 200, data: data })
        }
    })
}
// Update User
module.exports.updateUser = function (req, res) {
    let id = req.body.id
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let password = req.body.password
            // // Encrypt Password
            // let encPassword = bcrypt.hashSync(password,10)                               :encPassword
    let role = req.body.role
    userModel.updateMany({_id:id},{firstName:firstName,lastName:lastName,email:email,password:password,role:role},function(err,data){
        if (err) {
            res.json({ msg: "Something Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "Data updated", status: 200, data: data })
        }
    })
}

// Login
module.exports.login = function(req,res){
    let verifyEmail = req.body.email
    let verifyPassword = req.body.password
    let isCorrect = false
    userModel.findOne({email:verifyEmail},function(err,data){
        if(data){
            let ans = bcrypt.compareSync(verifyPassword,data.password)
            if(ans==true){
                isCorrect=true
            }
            else{
                isCorrect = false
            }
        }
        if (isCorrect==false) {
            res.json({ msg: "Credentials did not match try again!!", status: -1, data:req.body })
        }
        else {
            res.json({ msg: "LogIn Successfull", status: 200, data: data })
        }
    })
}
