const mongoose = require("mongoose");

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
    console.log('Connected to DB ' + mongoose.connection.name);
    console.log("Collections:", Object.keys(mongoose.connection.collections));
});
