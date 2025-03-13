const watchlistschema = require("../schemas/watchlist");
const mongoose = require("mongoose");


const Watchlist = mongoose.model("Watchlist", watchlistschema);


module.exports = Watchlist;