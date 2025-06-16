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
