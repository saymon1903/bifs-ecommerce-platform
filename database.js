const mongoose = require("mongoose");

// Replace with your MongoDB connection string
const DB_URL = "mongodb://localhost:27017/bifs-ecommerce";

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database connected successfully!");
    } catch (error) {
        console.error("Database connection failed:", error.message);
    }
};

module.exports = connectDB;
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    stock: Number,
    imageUrl: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    imageUrl: { type: String }
});

const Product = mongoose.model('Product', productSchema);

module.exports = const firebase = require('firebase/app');
require('firebase/database');

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://bifs-e-commerce-platform-default-rtdb.firebaseio.com/",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

module.exports = database;