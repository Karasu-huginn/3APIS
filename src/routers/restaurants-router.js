const express = require("express");
const { createRestaurant, getRestaurant, updateRestaurant, deleteRestaurant } = require("../controllers/restaurants-controller.js")
const { authMiddleware } = require("../middlewares/auth.js");
const router = express.Router();

//* CREATE
router.post("/", authMiddleware, createRestaurant);

//* READ
router.get("/", getRestaurant);

//* UPDATE
router.patch("/:id", authMiddleware, updateRestaurant);

//* DELETE
router.delete("/:id", authMiddleware, deleteRestaurant);

module.exports = router;