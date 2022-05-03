import { Button, Link, Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navBar/Navbar";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="home">
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
        <div className="hero">
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
            <Slide direction="right" in={true} mountOnEnter unmountOnExit>
              <div className="card">
                <Box sx={{ width: "75%", margin: "auto" }}>
                  <Typography
                    component="h4"
                    variant="h4"
                    align="center"
                    gutterBottom
                  >
                    Organizing a Meal Train page
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      height: "100%",
                      justifyContent: "space-between",
                      margin: "auto",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        margin: "auto",
                      }}
                    >
                      <Typography
                        component="h4"
                        variant="div"
                        align="left"
                        gutterBottom
                      >
                        Step 1
                      </Typography>
                      <Typography
                        component="body1"
                        variant="div"
                        align="left"
                        gutterBottom
                      >
                        Identify a friend who could use a little support and
                        enter their name, email address, and where to drop off
                        meals.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        margin: "auto",
                      }}
                    >
                      <img
                        style={{
                          height: "33%",
                          width: "33%",
                          objectFit: "contain",
                          margin: "auto",
                        }}
                        src="https://www.mealtrain.com/content/img/app/tokens/FEMALE_4.png"
                        alt="step 1"
                      />
                    </Box>
                  </Box>
                </Box>
              </div>
            </Slide>
            <Slide direction="left" in={true} mountOnEnter unmountOnExit>
              <div className="card">
                <Box sx={{ width: "75%", margin: "auto" }}>
                  <Typography
                    component="h4"
                    variant="h4"
                    align="center"
                    gutterBottom
                  >
                    Organizing a Meal Train page
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      height: "100%",
                      justifyContent: "space-between",
                      margin: "auto",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        margin: "auto",
                      }}
                    >
                      <Typography
                        component="h4"
                        variant="div"
                        align="left"
                        gutterBottom
                      >
                        Step 2
                      </Typography>
                      <Typography
                        component="body1"
                        variant="div"
                        align="left"
                        gutterBottom
                      >
                        Enter the dates meals would be helpful.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        margin: "auto",
                      }}
                    >
                      <img
                        style={{
                          height: "33%",
                          width: "33%",
                          objectFit: "contain",
                          margin: "auto",
                        }}
                        src="https://www.mealtrain.com/content/img/app/tokens/APPOINTMENTS.png"
                        alt="step 2"
                      />
                    </Box>
                  </Box>
                </Box>
              </div>
            </Slide>
            <Slide direction="right" in={true} mountOnEnter unmountOnExit>
              <div className="card">
                <Box sx={{ width: "75%", margin: "auto" }}>
                  <Typography
                    component="h4"
                    variant="h4"
                    align="center"
                    gutterBottom
                  >
                    Organizing a Meal Train page
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      height: "100%",
                      justifyContent: "space-between",
                      margin: "auto",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        margin: "auto",
                      }}
                    >
                      <Typography
                        component="h4"
                        variant="div"
                        align="left"
                        gutterBottom
                      >
                        Step 3
                      </Typography>
                      <Typography
                        component="body1"
                        variant="div"
                        align="left"
                        gutterBottom
                      >
                        Enter your friend’s food likes, dislikes, allergies, and
                        the best time to drop off a meal.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        margin: "auto",
                      }}
                    >
                      <img
                        style={{
                          height: "33%",
                          width: "33%",
                          objectFit: "contain",
                          margin: "auto",
                        }}
                        src="https://www.mealtrain.com/content/img/app/tokens/MEALS.png"
                        alt="step 3"
                      />
                    </Box>
                  </Box>
                </Box>
              </div>
            </Slide>
            <Slide direction="right" in={true} mountOnEnter unmountOnExit>
              <div className="card">
                <Box sx={{ width: "75%", margin: "auto" }}>
                  <Typography
                    component="h4"
                    variant="h4"
                    align="center"
                    gutterBottom
                  >
                    Organizing a Meal Train page
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      height: "100%",
                      justifyContent: "space-between",
                      margin: "auto",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        margin: "auto",
                      }}
                    >
                      <Typography
                        component="h4"
                        variant="div"
                        align="left"
                        gutterBottom
                      >
                        That was easy!
                      </Typography>
                      <Typography
                        component="body1"
                        variant="div"
                        align="left"
                        gutterBottom
                      >
                        Invited friends respond to the invitation, sign up for a
                        date, and provide a meal.
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#5cb85c",
                          color: "#FFF",
                          "&:hover": { backgroundColor: "#50a050" },
                          marginTop: "1rem",
                        }}
                        onClick={() => navigate("/trains/create")}
                      >
                        Start a Meal Train
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        margin: "auto",
                      }}
                    >
                      <img
                        style={{
                          height: "33%",
                          width: "33%",
                          objectFit: "contain",
                          margin: "auto",
                        }}
                        src="https://www.mealtrain.com/content/img/app/tokens/short-story.png"
                        alt="start train"
                      />
                    </Box>
                  </Box>
                </Box>
              </div>
            </Slide>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Home;
