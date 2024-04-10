const User = require('../models/user');


exports.registerUser = async (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    username: req.body.username,
   
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.loginUser = async (req, res) => {
 
};


