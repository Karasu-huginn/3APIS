const Menu = require("../models/menu-model.js");


//* CREATE
const createMenu = async (req, res) => {
    //todo errors handling
    //todo authentication
    try {
        const menu = await Menu.create(req.body)
        res.status(200).json(menu);
    } catch (error) {
        res.status(error.error).json({ detail: error.message })
    }
}

//* READ
const getMenu = async (req, res) => {
    //todo errors handling
    //todo sorting
    const { page } = req.query
    const { limit } = req.query
    try {
        const menus_q = await Menu.find()
        const page_min = (page * 1) - 1
        const page_max = page * limit
        const menus = menus_q.slice(page_min, page_max)
        res.status(200).json(menus)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ detail: error.message })
    }
}

//* UPDATE
const updateMenu = async (req, res) => {
    //todo errors handling
    //todo authentication
    try {
        const { id } = req.params
        const menu = await Menu.findByIdAndUpdate(id, req.body)
        res.status(200).json(menu);
    } catch (error) {
        res.status(error.error).json({ detail: error.message })
    }
}

//* DELETE
const deleteMenu = async (req, res) => {
    //todo errors handling
    //todo authentication
    try {
        const { id } = req.params
        const menu = await Menu.findByIdAndDelete(id)
        res.status(200).json(menu);
    } catch (error) {
        res.status(error.error).json({ detail: error.message })
    }
}

module.exports = {
    createMenu,
    getMenu,
    updateMenu,
    deleteMenu
}