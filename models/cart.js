const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }],
  quantities: [Number], 
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
 
  image: {
    data: Buffer,
    contentType: String
  }
});

module.exports = mongoose.model('Cart', cartSchema);
