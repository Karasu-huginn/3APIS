import express from "express";
const app = express();
import mongoose from "mongoose";

app.use(express.json());

mongoose.connect("mongodb://localhost:27017", {
    dbName: "FoodExpress",
});
const db = mongoose.connection;
  
db.on('error', (err) => {
    console.log(err);
});
  
db.once('open', () => {
    console.log('connected');
});
  
const UserSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    role: String,
});
export const User = mongoose.model("User", UserSchema);

app.get('/', (req, res) => {
    res.send(`<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <title>Todos</title>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <style>
    body{font-family:system-ui,Arial;padding:1.5rem;max-width:800px;margin:auto}
    table{border-collapse:collapse;width:100%}
    th,td{border:1px solid #ddd;padding:.5rem;text-align:left}
    th{background:#f5f5f5}
    .topbar a{margin-right:.75rem}
  </style>
</head>
<body>
  <div class="topbar">
    <a href="/index">🏠 Index</a>
    <a href="/form">➕ Nouveau</a>
    <a href="/cart">Panier</a>
  </div>
  <h1>Todo list</h1>
  <table>
    <thead><tr><th>ID</th><th>Texte</th><th>Fait</th><th>Action</th></tr></thead>
  </table>
</body>
</html>`);
});

app.get("/users", async (req, res) => {
    const users = await User.find();
    return res.status(200).json(users);
});

app.get("/restaurants", (req, res) => {
    res.json(articles);
});

app.get("/menus", (req, res) => {
    res.json(articles);
});

app.listen(3000, () => {
    console.log('Le serv: http://localhost:3000');
    console.log(process.argv);
});