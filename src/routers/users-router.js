import express, { response } from "express";
import { User } from "../database.js";

const router = express.Router();

//* CREATE
router.post("/inscription", async (req, res) => {
    const newUser = User({ ...req.body });
    newUser.save()
        .then(
            user => {
                res.status(200).json({ message: `Bien joué ${user.username}` })
            }
        )
});

//* READ
router.get("/", async (req, res) => {
    //res.send("get users")
    const users = await User.find();
    return res.status(200).json(users);
});

router.get("/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    return res.status(200).json(user);
});

//* UPDATE
router.patch("/:id", async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    const newEmailUser = await User.findOne({ email: req.body.email })

    if (newEmailUser !== null && req.body.email !== user.email) {
        res.status(409).json({ message: "Email déjà utilisé :(" });
        return;
    }

    const userUpdate = await User.findByIdAndUpdate(id, { ...req.body }, { new: true });
    if (!userUpdate) {
        res.status(404).json({ message: "Il existe pas >:(" });
        return;
    }
    res.status(200).json({ message: `${id} a été modifié` });
});

//* DELETE
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);

    res.status(200).json({ message: `L'utilisateur ${id} est désintégré !`, user });
});

export default router;