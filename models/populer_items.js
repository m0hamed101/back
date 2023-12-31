const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        price: { type: Array, required: true },
        description: { type: String },
        image: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("populer items", ProductSchema);