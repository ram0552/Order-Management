
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Box, Typography } from "@mui/material";
 // optional if you want extra custom styles


function CreateOrder() {
  const [orderId, setOrderId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState("");
  const [status, setStatus] = useState("Pending");

  const navigate = useNavigate();

  const handleCreateOrder = (event) => {
    event.preventDefault();
    fetch(import.meta.env.VITE_API_URL + "/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId, customerName, product, quantity, totalPrice, status }),
    })
      .then(res => res.json())
      .then(data => {
        alert("Order Added Successfully!");
        handleReset();
      })
      .catch(err => console.error(err));
  };

  const handleReset = () => {
    setOrderId("");
    setCustomerName("");
    setProduct("");
    setQuantity(1);
    setTotalPrice("");
    setStatus("Pending");
  };

  return (
    <Box sx={{
      maxWidth: 600,
      mx: "auto",
      mt: 5,
      p: 4,
      borderRadius: 3,
      boxShadow: 4,
      backgroundColor: "#fff",
      "&:hover": { transform: "translateY(-3px)", boxShadow: 6, transition: "all 0.3s" }
    }}>
      <Typography variant="h5" align="center" sx={{ mb: 3, color: "#1976d2" }}>
        Add New Order
      </Typography>

      <form onSubmit={handleCreateOrder}>
        <TextField label="Order ID" fullWidth margin="normal" value={orderId} onChange={(e) => setOrderId(e.target.value)} required />
        <TextField label="Customer Name" fullWidth margin="normal" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />
        <TextField label="Product" fullWidth margin="normal" value={product} onChange={(e) => setProduct(e.target.value)} required />
        <TextField label="Quantity" type="number" fullWidth margin="normal" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} inputProps={{ min: 1 }} required />
        <TextField label="Total Price" type="number" fullWidth margin="normal" value={totalPrice} onChange={(e) => setTotalPrice(e.target.value)} inputProps={{ min: 0 }} required />

        <FormControl fullWidth margin="normal">
          <InputLabel>Status</InputLabel>
          <Select value={status} onChange={(e) => setStatus(e.target.value)} required>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Processing">Processing</MenuItem>
            <MenuItem value="Shipped">Shipped</MenuItem>
            <MenuItem value="Delivered">Delivered</MenuItem>
            <MenuItem value="Cancelled">Cancelled</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          <Button type="submit" sx={{ flex: 1, mr: 1, mb: 1, background: "linear-gradient(135deg, #1976d2, #42a5f5)", color: "#fff" }} variant="contained">
            Add Order
          </Button>
          <Button type="button" onClick={handleReset} sx={{ flex: 1, mr: 1, mb: 1, background: "linear-gradient(135deg, #ff8a65, #ff7043)", color: "#fff" }} variant="contained">
            Reset
          </Button>
          <Button type="button" onClick={() => navigate("/")} sx={{ flex: 1, mb: 1, background: "linear-gradient(135deg, #4db6ac, #26a69a)", color: "#fff" }} variant="contained">
            Back to Home
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default CreateOrder;
