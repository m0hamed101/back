const express = require('express')
const app = express()
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const port = 5000
app.use(express.json());
const cors = require("cors")
app.use(cors())
dotenv.config();
// routers
const productsRouter = require("./router/products")
const populer_itemsRouter = require("./router/populer_items")

mongoose.connect(process.env.CONNECTION)
    .then(() => console.log("DB Connection Successfull!")).catch((err) => { console.log(err); });

app.use(function (req, res, next) {
    const allowedOrigins = [process.env.FRONTEND, process.env.TESTHOST];
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

app.use("", productsRouter)
app.use("", populer_itemsRouter)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})