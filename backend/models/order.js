const mongoose = require("mongoose");
const orderschema = require("../schemas/orderschema");


const Order = mongoose.model("Order", orderschema);


module.exports = Order;