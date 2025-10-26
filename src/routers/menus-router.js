const express = require("express");
const { createMenu, getMenu, updateMenu, deleteMenu } = require("../controllers/menus-controller.js")
const { authMiddleware } = require("../middlewares/auth.js");
const router = express.Router();

//* CREATE
router.post("/", authMiddleware, createMenu);

//* READ
router.get("/", getMenu);

//* UPDATE
router.get("/:id", authMiddleware, updateMenu);

//* DELETE
router.get("/:id", authMiddleware, deleteMenu);

module.exports = router;