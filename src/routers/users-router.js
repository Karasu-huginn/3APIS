import express from "express";
import { User } from "../database.js";

const router = express.Router();

//* CREATE
router.post("/", async (req, res) => {

});

//* READ
router.get("/", async (req, res) => {
    const users = await User.find();
    return res.status(200).json(users);
});

//* UPDATE
router.patch("/", async (req, res) => {

});

//* DELETE
router.delete("/", async (req, res) => {

});

export default router;