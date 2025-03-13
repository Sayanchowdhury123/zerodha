const mongoose = require("mongoose");

const Holdingschema = new mongoose.Schema({
     name: String,
     qty: Number,
     avg: Number,
     price: Number,
     day: String,
     net:String,


})


module.exports = Holdingschema;