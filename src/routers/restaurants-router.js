const express = require("express");
const { createRestaurant, getRestaurant, updateRestaurant, deleteRestaurant } = require("../controllers/restaurants-controller.js")

const router = express.Router();

//* CREATE
router.post("/", createRestaurant);

//* READ
router.get("/", getRestaurant);

//* UPDATE
router.patch("/:id", updateRestaurant);

//* DELETE
router.delete("/:id", deleteRestaurant);

module.exports = router;