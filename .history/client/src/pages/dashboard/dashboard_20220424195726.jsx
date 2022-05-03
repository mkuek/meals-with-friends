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
      </div>
    </>
  );
};

export default Dashboard;
