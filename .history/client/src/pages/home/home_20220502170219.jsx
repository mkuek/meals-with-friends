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
            Organize meals for a friend after a birth, surgery or illness
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Home;
