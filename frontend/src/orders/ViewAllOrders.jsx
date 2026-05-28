
import { useEffect, useState } from "react";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ViewAllOrders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/orders`)
      .then(res => res.json())
      .then(data => {
        setOrders(data.orders || data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleEdit = (id) => navigate(`/orders/edit/${id}`);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      fetch(`${import.meta.env.VITE_API_URL}/orders/${id}`, { method: "DELETE" })
        .then(() => setOrders(orders.filter(order => order._id !== id)));
    }
  };

  if (loading) return <Typography align="center" sx={{ mt: 5 }}>Loading Orders...</Typography>;

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4, color: "#1976d2" }}>All Orders</Typography>

      <TableContainer component={Paper} sx={{ maxWidth: "95%", margin: "0 auto", borderRadius: 3, boxShadow: 4 }}>
        <Table>
          <TableHead sx={{ background: "linear-gradient(135deg, #1976d2, #42a5f5)" }}>
            <TableRow>
              <TableCell sx={{ color: "#fff" }}>#</TableCell>
              <TableCell sx={{ color: "#fff" }}>Order ID</TableCell>
              <TableCell sx={{ color: "#fff" }}>Customer</TableCell>
              <TableCell sx={{ color: "#fff" }}>Product</TableCell>
              <TableCell sx={{ color: "#fff" }}>Quantity</TableCell>
              <TableCell sx={{ color: "#fff" }}>Total Price</TableCell>
              <TableCell sx={{ color: "#fff" }}>Status</TableCell>
              <TableCell sx={{ color: "#fff", textAlign: "center" }}>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map((order, index) => (
              <TableRow 
                key={order._id}
                sx={{
                  "&:hover": { backgroundColor: "#e3f2fd", transform: "scale(1.01)", transition: "all 0.2s" }
                }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{order.orderId || order._id}</TableCell>
                <TableCell>{order.customerName || order.name}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>${order.totalPrice || order.total_price}</TableCell>
                
                {/* Status Badge */}
                <TableCell>
                  <span style={{
                    padding: "4px 12px",
                    borderRadius: "12px",
                    backgroundColor: order.status === "Pending" ? "#ffb74d" :
                                     order.status === "Processing" ? "#64b5f6" :
                                     order.status === "Shipped" ? "#4db6ac" :
                                     order.status === "Delivered" ? "#81c784" : "#e57373",
                    color: "#fff",
                    fontWeight: 500,
                    fontSize: "0.9rem"
                  }}>
                    {order.status}
                  </span>
                </TableCell>

                {/* Action Buttons */}
                <TableCell sx={{ textAlign: "center" }}>
                  <Button 
                    variant="contained" 
                    color="warning" 
                    size="small" 
                    sx={{ mr: 1 }}
                    onClick={() => handleEdit(order._id)}
                  >
                    Edit
                  </Button>
                  <Button 
                    variant="contained" 
                    color="error" 
                    size="small" 
                    onClick={() => handleDelete(order._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Back Button */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button 
          variant="contained" 
          sx={{ background: "linear-gradient(135deg, #ff8a65, #ff7043)", color: "#fff" }}
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </Box>
    </Box>
  );
}

export default ViewAllOrders;
