import express from "express";
const app = express();
import usersRouter from "./routers/users-router.js";
import restaurantsRouter from "./routers/restaurants-router.js";
import menusRouter from "./routers/menus-router.js";

app.use(express.json());

const port = 3000;


app.use("/users", usersRouter);
app.use("/restaurants", restaurantsRouter);
app.use("/menus", menusRouter);





//* http listening
app.listen(port, () => {
  console.log(`Le serv est hébergé là-bas, ctrl+clique stp : http://localhost:${port}`);
  console.log(process.argv);
});