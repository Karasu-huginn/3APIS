const express = require("express");
const app = express();
app.use(express.json());
const database = require("./database.js");
const usersRouter = require("./routers/users-router.js");
const restaurantsRouter = require("./routers/restaurants-router.js");
const menusRouter = require("./routers/menus-router.js");


const port = 3000;


app.use("/users", usersRouter);
app.use("/restaurants", restaurantsRouter);
app.use("/menus", menusRouter);





//* http listening
app.listen(port, () => {
  console.log(`Le serv est hébergé là-bas, ctrl+clique stp : http://localhost:${port}`);
  console.log(process.argv);
});