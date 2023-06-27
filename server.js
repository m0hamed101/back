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



app.use(function (req, res, next) {
    const allowedOrigins = ["https://drinks-shop-c475.onrender.com/", "http://localhost:3000"];
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.header('Access-Control-Allow-Credentials', true);
        res.header(
            "Access-Control-Allow-Methods",
            "GET, POST, PUT, DELETE, OPTIONS"
        );
    }

    next();
});



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