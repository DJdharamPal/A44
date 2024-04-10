const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  shippingAddress: String,
  status: {
    type: String,
    enum: ['Pending', 'Shipped', 'Delivered'],
    default: 'Pending'
  },
  
  image: {
    data: Buffer,
    contentType: String
  }
});

module.exports = mongoose.model('Order', orderSchema);
