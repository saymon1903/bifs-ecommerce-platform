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
