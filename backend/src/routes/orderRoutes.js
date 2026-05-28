const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// @route   POST /orders
// @desc    Create a new order
router.post("/orders", orderController.createOrder);

// @route   GET /orders
// @desc    Get all orders
router.get("/orders", orderController.getAllOrders);

// @route   GET /orders/:id
// @desc    Get a specific order by ID
router.get("/orders/:id", orderController.getOrderById);

// @route   PUT /orders/:id
// @desc    Update an existing order by ID
router.put("/orders/:id", orderController.updateOrder);

// @route   DELETE /orders/:id
// @desc    Delete an order by ID
router.delete("/orders/:id", orderController.deleteOrder);

module.exports = router;
