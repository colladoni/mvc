const express = require ("express");
const app = express();

exports.checking = (req,res,next) =>{
    if (req.body.id){
        console.log(req.body);
        next();
    }else{
        res.send("No ID");
    }
}