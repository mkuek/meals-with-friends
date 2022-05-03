import React, { useState } from "react";
import Navbar from "../../components/navBar/Navbar";
import {
  Button,
  FormLabel,
  Grid,
  Paper,
  styled,
  TextField,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const Dashboard = () => {
  const [formContents, setFormContents] = useState({
    meal_recipient: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipcodezip: "",
    phone: "",
    meal_date_start: "",
    meal_date_end: "",
    meal_adults: "",
    meal_kids: "",
    meal_delivery_time: "",
    meal_instructions: "",
    meal_favorites: "",
    meal_non_favorite: "",
    meal_allergy: "",
  });

  const handleStepOne = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormContents({
      ...formContents,
      [name]: value,
    });
    console.log(formContents);
  };

  return (
    <>
      <Navbar />
      <div>Dashboard</div>
      <form>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <TextField
              onChange={handleStepOne}
              variant="standard"
              type="text"
              id="name"
              name="meal_recipient"
              placeholder="Recipient name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              onChange={handleStepOne}
              variant="standard"
              type="text"
              id="email"
              name="email"
              placeholder="Recipient email address"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel htmlFor="address">Address</FormLabel>
            <TextField
              onChange={handleStepOne}
              variant="standard"
              type="text"
              id="address"
              name="address"
              placeholder="Optional"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormLabel htmlFor="city">City</FormLabel>
            <TextField
              onChange={handleStepOne}
              variant="standard"
              type="text"
              id="city"
              name="city"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormLabel htmlFor="state">State</FormLabel>
            <TextField
              onChange={handleStepOne}
              variant="standard"
              type="text"
              id="state"
              name="state"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormLabel htmlFor="zip">Postal Code</FormLabel>
            <TextField
              onChange={handleStepOne}
              variant="standard"
              type="text"
              id="zip"
              name="zipcode"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <TextField
              onChange={handleStepOne}
              variant="standard"
              type="text"
              id="phone"
              name="phone"
              placeholder="Optional"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container justify="flex-end" className="nextButton">
          <Button variant="contained">
            Next Step <ArrowRightIcon />
          </Button>
        </Grid>
      </form>
    </>
  );
};

export default Dashboard;
