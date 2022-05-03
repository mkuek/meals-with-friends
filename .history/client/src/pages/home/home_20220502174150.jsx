import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "../../components/navBar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="hero">
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
            sx={{ marginTop: "1rem" }}
          >
            Organize meals for a friend after a birth, surgery or illness
          </Typography>
          <Box
            sx={{
              backgroundColor: "#A6CE39",
            }}
          >
            <img src="https://www.mealtrain.com/content/img/app/tokens/story.png"></img>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: "#A6CE39",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{ width: "20%", alignSelf: "center" }}
            >
              Get Started
            </Button>
            <Typography
              component="h4"
              variant="p"
              align="center"
              gutterBottom
              sx={{ color: "#FFF" }}
            >
              Organize meals for a friend after a birth, surgery or illness
            </Typography>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Home;
