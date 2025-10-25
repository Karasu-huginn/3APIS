const express = require("express");
const { createMenu, getMenu, updateMenu, deleteMenu } = require("../controllers/menus-controller.js")

const router = express.Router();

//* CREATE
router.post("/", createMenu);

//* READ
router.get("/", getMenu);

//* UPDATE
router.get("/:id", updateMenu);

//* DELETE
router.get("/:id", deleteMenu);

module.exports = router;