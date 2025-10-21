import express from "express";
const app = express();
import mongoose from "mongoose";
import usersRouter from "./routers/users-router.js";
import restaurantsRouter from "./routers/restaurants-router.js";
import menusRouter from "./routers/menus-router.js";

app.use(express.json());

const port = 3000;


app.use("/users", usersRouter);
app.use("/restaurants", restaurantsRouter);
app.use("/menus", menusRouter);





//* MongoDB
mongoose.connect("mongodb://localhost:27017", {
  dbName: "FoodExpress",
});
const db = mongoose.connection;

db.on('error', (err) => {
  console.log(err);
});

db.once('open', () => {
  console.log('Connected to DB');
});

const UserSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  role: String,
});
export const User = mongoose.model("User", UserSchema);




//* http listening
app.listen(port, () => {
  console.log(`Le serv est hébergé là-bas, ctrl+clique stp : http://localhost:${port}`);
  console.log(process.argv);
});