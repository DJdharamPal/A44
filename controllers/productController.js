const Product = require('../models/product');


exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.createProduct = async (req, res) => {
  const product = new Product({
    description: req.body.description,
    image: req.body.image,
    pricing: req.body.pricing,
    shippingCost: req.body.shippingCost
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};


