const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        // id: { type: Number, require: true },
        title: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String },
        image: { type: String, required: true },
    },
);

module.exports = mongoose.model("item", ProductSchema);