const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path'); 

const Product = require('./models/product');
const Cart = require('./models/cart');
const User = require('./models/user');
const order = require('./models/order');
const commnet = require('./models/comment')
const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://kakurawat83:DikshuRwt7777@cluster0.gfwjyjk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 4000; // Change port to 4000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
