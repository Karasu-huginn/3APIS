const express = require("express");
const router = express.Router();
const { createUser, getUser, updateUser, deleteUser } = require("../controllers/users-controller.js")


//* CREATE
router.post("/", createUser);

//* READ
router.get("/:id", getUser);

//* UPDATE
router.patch("/:id", updateUser);

//* DELETE
router.delete("/:id", deleteUser);

module.exports = router;