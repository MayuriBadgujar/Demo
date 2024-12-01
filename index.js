

var express = require('express');
var mongoose = require("mongoose");

var db=require("./Database/db.js")
db();



const Schema = mongoose.Schema;


const userschema = new Schema({

    name:String,
    age:Number,
    place:String,
});




const userModel = mongoose.model('users',userschema);


var app=express();
app.use(express.json());

app.get("/users" ,async function (req,res){
    try{
        var result=await userModel.find();
        res.send(result);
    }
    catch(err){
        res.send(err.message);

    }
});

app.listen(9065);
