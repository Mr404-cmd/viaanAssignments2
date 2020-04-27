const express = require('express')
const mongoose = require('mongoose')
const user = require('../DB/user')
const route = express.Router();
route.post('/',async(req,res)=>{
    const{firstname,lastname} = req.body;
    let user={}
    user.firstname=firstname
    user.lastname=lastname
    let userModel= new user(user)
    await userModel.save()
    res.json(userModel);
})
module.exports=route