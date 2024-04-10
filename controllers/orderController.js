const Order = require('../models/order');


exports.createOrder = async (req, res) => {
  const order = new Order({
    products: req.body.products,
    user: req.body.user,
    totalPrice: req.body.totalPrice,
    shippingAddress: req.body.shippingAddress,
    
  });

  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


