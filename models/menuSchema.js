const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: [String],
    enum: ["sweet", "sour", "spicy", "hot"],
    required: true,
  },
  is_drink: {
    type: Boolean,
    default: false,
  },
  ingredients: {
    type: [String],
    default: [],
  },
  num_sales: {
    type: Number,
    defauilt: 0,
  },
});

const mymenu = mongoose.model("mymenu", menuSchema);
module.exports = mymenu;
