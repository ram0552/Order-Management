const { ObjectId } = require("mongodb");
const connectDB = require("../config/db");

// Create order
async function createOrder(req, res) {
  try {
    const db = await connectDB();
    const order = req.body;

    if (!order.orderId || !order.customerName || !order.product || !order.quantity || !order.totalPrice) {
      return res.status(400).json({ message: "Order ID, Customer Name, Product, Quantity, Total Price are required" });
    }

    const result = await db.collection("order_details").insertOne(order);
    res.status(201).json({ message: "Order created successfully", id: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// Get all orders
async function getAllOrders(req, res) {
  try {
    const db = await connectDB();
    const orders = await db.collection("order_details").find({}).toArray();
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// Get order by ID
async function getOrderById(req, res) {
  try {
    const db = await connectDB();
    const id = req.params.id;
    if (!ObjectId.isValid(id)) return res.status(400).json({ message: "Invalid order ID" });
    const order = await db.collection("order_details").findOne({ _id: new ObjectId(id) });
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// Update order
async function updateOrder(req, res) {
  try {
    const db = await connectDB();
    const id = req.params.id;
    const updatedData = req.body;

    const result = await db.collection("order_details").updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedData }
    );

    if (result.matchedCount === 0) return res.status(404).json({ message: "Order not found" });
    res.json({ message: "Order updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// Delete order
async function deleteOrder(req, res) {
  try {
    const db = await connectDB();
    const id = req.params.id;
    const result = await db.collection("order_details").deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) return res.status(404).json({ message: "Order not found" });
    res.json({ message: "Order deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = { createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder };
