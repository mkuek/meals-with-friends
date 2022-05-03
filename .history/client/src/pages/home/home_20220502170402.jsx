import { Typography } from "@mui/material";
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
          <Box>
            <img src="https://www.mealtrain.com/content/img/app/tokens/story.png"></img>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Home;
