import React, { useState } from "react";
import Navbar from "../../components/navBar/Navbar";
import {
  Button,
  Divider,
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
        <div className="dashboardBody">
          <p>
            Below is a list of all of the events you have created or have been
            invited to participate in.
          </p>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              one
            </Grid>
            <Grid item xs={4}>
              two
            </Grid>
            <Grid item xs={4}>
              three
            </Grid>
          </Grid>
          <Divider variant="middle" />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              one
            </Grid>
            <Grid item xs={4}>
              two
            </Grid>
            <Grid item xs={4}>
              three
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
