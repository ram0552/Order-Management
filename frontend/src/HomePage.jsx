import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <Box className="homepage-container">
      {/* Main Heading */}
      <Typography 
        variant="h3" 
        component="h1" 
        align="center" 
        gutterBottom
        sx={{ marginTop: 4, marginBottom: 6 }}
      >
        Order Management System
      </Typography>

      {/* Dashboard Cards */}
      <Box className="cards-container">
        <Box className="dashboard-card" onClick={() => navigate("/orders/create")}>
          <span className="material-icons" style={{ fontSize: 50 }}>add_shopping_cart</span>
          <h3>Add Order</h3>
        </Box>

        <Box className="dashboard-card" onClick={() => navigate("/orders")}>
          <span className="material-icons" style={{ fontSize: 50 }}>list_alt</span>
          <h3>View Orders</h3>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
