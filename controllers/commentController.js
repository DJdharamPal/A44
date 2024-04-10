const Comment = require('../models/comment');


exports.createComment = async (req, res) => {
  const comment = new Comment({
    product: req.body.product,
    user: req.body.user,
    rating: req.body.rating,
    image: req.body.image,
    text: req.body.text
  });

  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


