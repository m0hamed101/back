const  Router  = require("express").Router();
const Product = require('../models/items');
const item = require('../models/item')

// git all products
Router.get('/products', async (req, res) => {
    const data = await Product.find();
    res.json(data)
})

Router.get('/products/:id', async (req, res) => {
  const productitem = await item.find(req.params)
  res.json(productitem)
})

module.exports =Router;