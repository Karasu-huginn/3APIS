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
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const { sort } = req.query
    try {
        let query = Menu.find({})
        if (sort) {
            query.sort(sort.split(",").join(" "))
        }
        const page_min = (page - 1) * limit
        const page_max = page * limit
        query = query.skip(page_min).limit(page_max)
        const menus = await query
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