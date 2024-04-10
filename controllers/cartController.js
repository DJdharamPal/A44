const Cart = require('../models/cart');


exports.createCart = async (req, res) => {
  const cart = new Cart({
    products: req.body.products,
    quantities: req.body.quantities,
    user: req.body.user,
    
  });

  try {
    const newCart = await cart.save();
    res.status(201).json(newCart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


