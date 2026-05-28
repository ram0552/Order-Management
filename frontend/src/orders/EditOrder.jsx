

// export default EditOrder;
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Box, Typography } from "@mui/material";

function EditOrder() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [orderId, setOrderId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState("");
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/orders/${id}`)
      .then(res => res.json())
      .then(data => {
        setOrderId(data.orderId || data._id);
        setCustomerName(data.customerName || data.name);
        setProduct(data.product);
        setQuantity(data.quantity);
        setTotalPrice(data.totalPrice || data.total_price);
        setStatus(data.status);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_API_URL}/orders/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId, customerName, product, quantity, totalPrice, status })
    })
      .then(res => res.json())
      .then(() => {
        alert("Order Updated Successfully!");
        navigate("/orders");
      })
      .catch(err => console.error(err));
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
      <Typography variant="h5" align="center" sx={{ mb: 3, color: "#1976d2" }}>Edit Order</Typography>

      <form onSubmit={handleSubmit}>
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
            Save Changes
          </Button>
          <Button type="button" onClick={() => navigate("/orders")} sx={{ flex: 1, mr: 1, mb: 1, background: "linear-gradient(135deg, #ff8a65, #ff7043)", color: "#fff" }} variant="contained">
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default EditOrder;
