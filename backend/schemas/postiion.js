const mongoose = require("mongoose");


const positionschema = new mongoose.Schema({
    name:String,
    price:Number,
    product:String,
    avg:Number,
    isLoss:Boolean,
    day:String,
    net:String,
    qty:Number,
})


module.exports = positionschema;