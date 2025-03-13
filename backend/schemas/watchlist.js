const mongoose = require("mongoose");

const watchlistschema = new mongoose.Schema({
    name: String,
    isDown: Boolean,
    price:Number,
    percent: String,
})

module.exports = watchlistschema;