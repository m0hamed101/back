const Router = require("express").Router();
const populer_items = require('../models/populer_items');

Router.get('/populer_items', async (req, res) => {
    const data_populer = await populer_items.find();
    res.json(data_populer)
})
module.exports = Router;