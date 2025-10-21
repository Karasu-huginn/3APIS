import mongoose from "mongoose";

const MONGODB_URI = "mongodb://localhost:27017";
const DBNAME =
    process.env.NODE_ENV === "test"
        ? "FoodExpress-test"
        : "FoodExpress";
const db = mongoose.connection;


mongoose.connect(MONGODB_URI, {
    dbName: DBNAME,
});

//* DB Connection check
db.on('error', (err) => {
    console.log(err);
});

db.once('open', () => {
    console.log('Connected to DB');
});


//* Schemas
const UserSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    role: { type: String, default: 'user' },
});
const RestaurantSchema = new mongoose.Schema({
    //todo attributes
});
const MenuSchema = new mongoose.Schema({
    //todo attributes
});

export const User = mongoose.model("User", UserSchema);
export const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
export const Menu = mongoose.model("Menu", MenuSchema);
