const bcrypt = require("bcrypt");
const User = require("../models/user-model.js");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
    var regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "g")
    var regex_res = regex.exec(req.body.email)
    if (!regex_res) {
        res.status(409).json({ status_code: 409, detail: "Invalid email address" })
    }
    bcrypt.hash(req.body.password, 10, async (error, hash) => {
        const newUser = User({ ...req.body, password: hash });
        newUser.save()
            .then(
                user => {
                    res.status(200).json({ message: `Bien joué ${user.username}` })
                }
            )
    })
}

const getUser = async (req, res) => {
    if (req.user.role !== "admin" && req.user.id !== req.params.id) {
        return res.status(403).json({ message: "Non autorisé à consulter ce compte" });
    }

    const user = await User.findById(req.params.id);
    return res.status(200).json(user);
}

const updateUser = async (req, res) => {
    if (req.user.role !== "admin" && req.user.id !== req.params.id) {
        return res.status(403).json({ message: "Non autorisé à consulter ce compte" });
    }
    
    const id = req.params.id;
    const user = await User.findById(id);
    const newEmailUser = await User.findOne({ email: req.body.email })

    bcrypt.hash(req.body.password, 10, async (error, hash) => {
        const userUpdate = await User.findByIdAndUpdate(id, { ...req.body, password: hash }, { new: true });
        if (!userUpdate) {
            res.status(404).json({ message: "Il existe pas >:(" });
            return;
        }
        if (newEmailUser !== null && req.body.email !== user.email) {
            res.status(409).json({ message: "Email déjà utilisé :(" });
            return;
        }
        res.status(200).json({ message: `${id} a été modifié` });
    })

}

const deleteUser = async (req, res) => {
    if (req.user.role !== "admin" && req.user.id !== req.params.id) {
        return res.status(403).json({ message: "Non autorisé à consulter ce compte" });
    }
    
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);

    res.status(200).json({ message: `L'utilisateur ${id} est désintégré !`, user });
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    User.findOne({email})
        .then(
            (async user => {
                if (!user) {
                    return res.status(404).json({ error: "Utilisateur non trouvé" });
                }
                
                const match = await bcrypt.compare(password, user.password);
                if (!match) {
                    return res.status(403).json({ error: "Mot de passe incorrect" });
                }

                const token = jwt.sign(
                    { 
                        id: user._id, 
                        role: user.role, 
                        email: user.email 
                    },
                    process.env.JWT_SECRET || "superSecretKey", // a mettre dans un .env
                    { expiresIn: "1h" }
                );

                return res.status(200).json({ 
                    message: `Salut ${user.username}, tu es connecté !`,
                    token
                });
            })
        )
        .catch(
            (error => {
                res.status(500).json(error);
            })
        )
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    loginUser
}