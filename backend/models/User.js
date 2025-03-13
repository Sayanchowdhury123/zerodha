const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    phone: {type:String,required:true},
    password:{type:String,required:true},
})


const User = mongoose.model("User",userschema);

module.exports = User;