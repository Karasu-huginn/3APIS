const mongoose = require("mongoose");

const MenuSchema = mongoose.Schema({
    restaurant: mongoose.SchemaTypes.ObjectId,
    name: String,
    description: String,
    price: String,
    category: String,
});
module.exports = mongoose.model("Menu", MenuSchema);
