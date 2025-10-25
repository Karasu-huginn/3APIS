const mongoose = require("mongoose");

const RestaurantSchema = mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    opening_hours: String,
});
module.exports = mongoose.model("Restaurant", RestaurantSchema);
