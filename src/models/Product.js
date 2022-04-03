const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  code: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  is_active: {
    type: Boolean,
    require: true,
  }
});

mongoose.model('Product', ProductSchema);
