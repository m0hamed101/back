const express = require('express')
const app = express()
const port = 5000
const mongoose = require("mongoose")
const Product = require('./models/items');
const populer_items = require('./models/populer items');
const item = require('./models/item')

mongoose.connect("mongodb+srv://database001:TGtb8cGNM1jVcyM6@cluster0.0lmw3hc.mongodb.net/Shop_UIX")
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => { console.log(err); });

app.use(express.json());
const cors = require("cors")
app.use(cors())



app.get('/populer_items', async (req, res) => {
    const data_populer = await populer_items.find();
    res.json(data_populer)
})

app.get('/:id', async (req, res) => {
    const backdata = await item.find(req.params)
    res.json(backdata)
})



app.get('/', async (req, res) => {
    const data = await Product.find();
    res.json(data)
})


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})