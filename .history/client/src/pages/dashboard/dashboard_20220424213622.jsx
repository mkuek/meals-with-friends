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
          <Grid
            container
            spacing={2}
            rowSpacing={2}
            style={{ margin: "1rem", alignItems: "flex-start", padding: "0px" }}
          >
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
          <Divider style={{ width: "100%" }} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;