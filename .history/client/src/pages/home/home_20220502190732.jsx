import { Button, Link, Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navBar/Navbar";

const Home = () => {
  const navigate = useNavigate();
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
              gap: "0.5rem",
            }}
          >
            <Slide direction="right" in={true} mountOnEnter unmountOnExit>
              <Button
                variant="contained"
                size="large"
                sx={{
                  width: "20%",
                  alignSelf: "center",
                  backgroundColor: "#f08b1d",
                  "&:hover": { backgroundColor: "#bc6d17" },
                }}
                onClick={() => navigate("/trains/create")}
              >
                Get Started
              </Button>
            </Slide>
            <Slide direction="right" in={true} mountOnEnter unmountOnExit>
              <Link href="trains/create" underline="hover">
                <Typography
                  component="h4"
                  variant="p"
                  align="center"
                  gutterBottom
                  sx={{ color: "#FFF" }}
                >
                  Organize a Free Meal Calendar Now
                </Typography>
              </Link>
            </Slide>
          </Box>
        </div>
        <div className="body">
          <Box>
            <Box>
              <Typography
                component="h4"
                variant="h4"
                align="left"
                gutterBottom
                sx={{ color: "#00BCE4", marginTop: "1rem" }}
              >
                How it Works
              </Typography>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Home;
