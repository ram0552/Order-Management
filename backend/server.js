require("dotenv").config();

const express = require("express");
const orderRoutes = require("./src/routes/orderRoutes"); 
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Routes
app.use("/", orderRoutes);

// Health check or base route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});