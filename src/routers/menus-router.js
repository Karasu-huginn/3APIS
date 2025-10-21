import express from "express";

const router = express.Router();

//* CREATE
router.post("/", (req, res) => {

});

//* READ
router.get("/", (req, res) => {
    res.json(articles);
});

//* UPDATE
router.get("/", (req, res) => {

});

//* DELETE
router.get("/", (req, res) => {

});

export default router;