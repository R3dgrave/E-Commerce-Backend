const mongoose = require("mongoose");
const brandSchema = new mongoose.Schema({
  name: { type: String, required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }
});

const Brand = mongoose.model("brands", brandSchema);
module.exports = Brand;
