const mongoose = require("mongoose");

const positionschema = require("../schemas/postiion");


const Position = mongoose.model("Position", positionschema);
module.exports = Position;