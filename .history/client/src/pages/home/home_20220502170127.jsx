import { Typography } from "@mui/material";
import React from "react";
import Navbar from "../../components/navBar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="hero">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Album layout
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Home;
