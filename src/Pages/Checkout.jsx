import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper, Grid, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import SidebarNavbar from '../Components/SidebarNavbar';
import img16 from "../assets/img16.jpg";

const CheckoutPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the payment and order
    navigate('/order-confirmation');
  };

  
  const handleApplyOrder = () => {
    if (coupon === "DISCOUNT10") {
      setDiscount(10);
    } else {
      alert("Invalid coupon code");
    }
  };

  return (
    <>
    <Navbar />
    <SidebarNavbar />
      <div className="relative">
            <img src={img16} alt="" className="w-full h-[300px] object-cover" />
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-7xl font-[windSong] z-10">
              Check Out
            </div>
          </div>
    <Box sx={{ maxWidth: 900, margin: 'auto', padding: 6 }}>
      <Typography variant="h4" align="center" fontFamily="windSong" gutterBottom>
        Checkout
      </Typography>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Shipping Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Postal Code"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Card Number"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                label="Expiry Date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                label="CVV"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Divider sx={{ margin: '20px 0' }} />
          <Button onClick={handleApplyOrder} type="submit" variant="contained" color="primary" fullWidth>
            Place Order
          </Button>
        </form>
      </Paper>
    </Box>
    <Footer />
    </>
  );
};

export default CheckoutPage;
