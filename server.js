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
