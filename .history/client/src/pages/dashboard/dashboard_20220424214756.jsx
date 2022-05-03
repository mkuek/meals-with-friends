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
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
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
          <div className="list">
            <div className="left">left</div>
            <div className="center">Meal Train for:</div>
            <div className="right">
              <Button variant="contained">
                <SearchIcon fontSize="small" />
                Open
              </Button>
              <Button variant="outlined">
                <EditIcon fontSize="small" />
                Make Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
