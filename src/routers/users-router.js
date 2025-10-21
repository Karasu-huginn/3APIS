import express from "express";

const router = express.Router();

//* CREATE
router.post("/", async (req, res) => {

});

//* READ
router.get("/", async (req, res) => {
    res.send("get users")
    //const users = await User.find();
    //return res.status(200).json(users);
});

//* UPDATE
router.patch("/", async (req, res) => {

});

//* DELETE
router.delete("/", async (req, res) => {

});

export default router;