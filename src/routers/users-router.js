const express = require("express");
const router = express.Router();
const { createUser, getUser, updateUser, deleteUser, loginUser } = require("../controllers/users-controller.js")
const { authMiddleware } = require("../middlewares/auth.js");


//* CREATE
router.post("/", createUser);

//* LOGIN
router.post("/login", loginUser);

//* READ
router.get("/:id", authMiddleware, getUser);

//* UPDATE
router.patch("/:id", authMiddleware, updateUser);

//* DELETE
router.delete("/:id", authMiddleware, deleteUser);

module.exports = router;