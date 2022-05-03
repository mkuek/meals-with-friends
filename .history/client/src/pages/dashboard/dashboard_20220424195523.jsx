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
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="register">
        <div className="title">Create user account</div>

        <div className="formHeader">Create a MealTrain.com account</div>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <TextField
              variant="standard"
              type="text"
              id="firstName"
              name="first_name"
              placeholder="First Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <TextField
              variant="standard"
              type="text"
              id="lastName"
              name="last_name"
              placeholder="Last Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel htmlFor="email">Your email address</FormLabel>
            <TextField
              variant="standard"
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField
              variant="standard"
              type="text"
              id="password"
              name="password"
              placeholder="Password"
              fullWidth
            />
          </Grid>
        </Grid>
        <Button className="signInButton" variant="contained" type="submit">
          Create User Account
        </Button>
        <div className="signIn">
          Used Meal Train before? <a href="/login">Sign In</a>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
