const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    email: String,  //todo validate email here
    username: String,
    password: String,
    role: { type: String, default: 'user' },
});
module.exports = mongoose.model("User", UserSchema);
