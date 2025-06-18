const express = require("express");
const app = express();
const PORT = 5000;

// Middleware for parsing JSON
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
    res.send("Welcome to BIFS E-commerce Backend!");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
const express = require("express");
const app = express();

// Middleware
app.use(express.json()); // JSON ডাটা পার্স করার জন্য

// API রুট: ডাটা গ্রহণ করার জন্য
app.post("/api/product", (req, res) => {
    const product = req.body; // Frontend থেকে প্রাপ্ত ডাটা
    console.log("Received Product:", product);

    // Response পাঠানো
    res.status(200).send({ message: "Product received successfully!" });
});

// সার্ভার শুরু করুন
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/bifs-ecommerce?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));
const express = require('express');
const Product = require('./database');
const app = express();

app.use(express.json());

// Add a product
app.post('/api/products', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
