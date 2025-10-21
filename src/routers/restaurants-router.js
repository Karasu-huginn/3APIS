import express from "express";
import { Restaurant } from "../database.js";

const router = express.Router();

//* CREATE
router.post("/", (req, res) => {

});

//* READ
router.get("/", (req, res) => {
    //res.json(articles);
});

//* UPDATE
router.patch("/", (req, res) => {

});

//* DELETE
router.delete("/", (req, res) => {

});

export default router;