const Restaurant = require("../models/restaurant-model.js");


//* CREATE
const createRestaurant = async (req, res) => {
    //todo errors handling
    //todo authentication
    try {
        const restaurant = await Restaurant.create(req.body)
        res.status(200).json(restaurant);
    } catch (error) {
        res.status(error.error).json({ detail: error.message })
    }
}

//* READ
const getRestaurant = async (req, res) => {
    //todo errors handling
    //todo pagination
    //todo sorting
    const { page } = req.query
    try {
        const restaurant = await Restaurant.find({})
        console.log(restaurant)
        res.status(200).json(restaurant)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ detail: error.message })
    }
}

//* UPDATE
const updateRestaurant = async (req, res) => {
    //todo errors handling
    //todo authentication
    try {
        const { id } = req.params
        const restaurant = await Restaurant.findByIdAndUpdate(id, req.body)
        res.status(200).json(restaurant);
    } catch (error) {
        res.status(error.error).json({ detail: error.message })
    }
}

//* DELETE
const deleteRestaurant = async (req, res) => {
    //todo errors handling
    //todo authentication
    try {
        const { id } = req.params
        const restaurant = await Restaurant.findByIdAndDelete(id)
        res.status(200).json(restaurant);
    } catch (error) {
        res.status(error.error).json({ detail: error.message })
    }
}

module.exports = {
    createRestaurant,
    getRestaurant,
    updateRestaurant,
    deleteRestaurant
}