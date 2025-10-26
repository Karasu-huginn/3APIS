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
    //todo sorting
    const { page } = req.query
    const { limit } = req.query
    try {
        const restaurants_q = await Restaurant.find({})
        const page_min = (page * 1) - 1
        const page_max = page * limit
        const restaurants = restaurants_q.slice(page_min, page_max)
        res.status(200).json(restaurants)
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