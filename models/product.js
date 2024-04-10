const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  image: {
    data: Buffer, 
    contentType: String 
  },
  pricing: {
    type: Number,
    required: true
  },
  shippingCost: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Product', productSchema);
