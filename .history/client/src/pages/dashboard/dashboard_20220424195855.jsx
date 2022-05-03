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
      <div className="dashboard">
        <div className="title">My Dashboard</div>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            one
          </Grid>
          <Grid item xs={12}>
            two{" "}
          </Grid>
          <Grid item xs={12}>
            three{" "}
          </Grid>
          <Grid item xs={12}>
            four{" "}
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
