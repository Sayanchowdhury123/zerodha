
const mongoose = require("mongoose");
const holdingschma = require("../schemas/holding");

const Holding = mongoose.model("Holding", holdingschma)

module.exports = Holding;