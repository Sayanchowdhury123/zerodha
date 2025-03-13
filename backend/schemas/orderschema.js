const mongoose = require("mongoose");


const orderschema = new mongoose.Schema({
    name:String,
    qty:Number,
    price:Number,
    mode: String,
})


module.exports = orderschema;