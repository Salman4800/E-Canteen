
const fs = require("fs")
const fsl = require("fs")

function login(req,res){
    let logInHtml= fsl.readFileSync("./views/logIn.html")
    res.write(logInHtml)
    res.end()
}

function signup(req,res){
    let signUpHtml= fs.readFileSync("./views/signup.html")
    res.write(signUpHtml)
    res.end()
}

function saveuser(req,res){
    console.log(req.body);
    res.write("Data Saved")
    res.end()
}

module.exports.login = login
module.exports.signup = signup
module.exports.saveuser= saveuser