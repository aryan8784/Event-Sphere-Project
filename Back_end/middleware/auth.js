const mongoose = require ('mongoose');
const User = require ('../model/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const CheckUserAuth = async (req, res, next)=>{
    let token;
    const {authorization} =req.headers
    if (authorization && authorization.startsWith("Bearer")){
        token = authorization.split(" ")[1];
        const decodetoken = jwt.verify(token ,"hgshheyrtg5745")
        const id = decodetoken.id
        req.user = await User.findById(id).select('-password') 
        next();
    }
    else{
        res.status(200).json({
            success:false,
            message:"You are not authorized to access this route"
        });
    }  
}
module.exports = CheckUserAuth