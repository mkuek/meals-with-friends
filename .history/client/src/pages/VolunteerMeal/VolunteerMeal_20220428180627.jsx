import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./volunteerMeal.scss";
import {
  Button,
  FormLabel,
  Grid,
  MenuItem,
  Select,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Navbar from "../../components/navBar/Navbar";

const VolunteerMeal = () => {
  const [trainInfo, setTrainInfo] = useState({ meal_members: "0" });
  const [userInfo, setUserInfo] = useState([]);
  const [error, setError] = useState(false);
  const [formContents, setFormContents] = useState([]);

  const { trainId } = useParams();
  const { currentUser } = useContext(AuthContext);

  const getData = async () => {
    const trainListQuery = doc(db, "train_info", trainId);
    const querySnapshot = await getDoc(trainListQuery);
    console.log(querySnapshot.data());
    setTrainInfo(querySnapshot.data());
  };

  const getUserData = async () => {
    const userQuery = doc(db, "users", currentUser.uid);
    const querySnapshot = await getDoc(userQuery);
    console.log(querySnapshot.data());
    setUserInfo(querySnapshot.data());
  };

  useEffect(() => {
    getData();
    getUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {
      setError(true);
      console.log(error.message);
      // ..
    }
  };

  const handleFormInputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormContents({
      ...formContents,
      [name]: value,
    });
  };
  return (
    <>
      <Navbar />
      {trainInfo && (
        <div className="volunteer">
          <div className="title">
            <div className="title-left">
              <Typography variant="h6" component="div">
                Meal Train for
              </Typography>
              <Typography variant="h4" component="div">
                {trainInfo.meal_recipient}
              </Typography>
            </div>
          </div>
          <div className="body">
            <div className="body-title">
              <Typography variant="h3" component="div">
                Volunteer
              </Typography>
              <Typography variant="subtitle1" component="div">
                Great! Your friend will appreciate the support!
              </Typography>
            </div>
            <div className="body-main">
              <div className="left">
                <Grid item xs>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    component="div"
                  >
                    Number of People
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="div"
                    marginTop="0.25rem"
                  >
                    {`Adults: ${Number(trainInfo.meal_adults)} 
                      Kids:${Number(trainInfo.meal_kids)}`}
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    component="div"
                  >
                    Preferred delivery time
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="div"
                    marginTop="0.25rem"
                  >
                    {trainInfo.meal_delivery_time}
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    component="div"
                  >
                    Favorite meals/restaurants
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="div"
                    marginTop="0.25rem"
                  >
                    {trainInfo.meal_favorites}
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    component="div"
                  >
                    Least Favorite meals
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="div"
                    marginTop="0.25rem"
                  >
                    {trainInfo.meal_non_favorite}
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    component="div"
                  >
                    Allergies or dietary restrictions
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    component="div"
                  >
                    Special Instructions
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="div"
                    marginTop="0.25rem"
                  >
                    {trainInfo.meal_instructions}
                  </Typography>
                </Grid>
              </div>
              <div className="right">
                <form onSubmit={handleSubmit}>
                  <div className="form-header">
                    Please enter a meal description and any notes.
                  </div>
                  <Grid container spacing={3} justifyContent="flex-end">
                    <Grid item xs={9}>
                      <FormLabel htmlFor="firstName">First Name</FormLabel>
                      <TextField
                        onChange={handleFormInputs}
                        variant="standard"
                        type="text"
                        id="firstName"
                        name="first_name"
                        placeholder="First Name"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={9}>
                      <FormLabel htmlFor="lastName">Last Name</FormLabel>
                      <TextField
                        onChange={handleFormInputs}
                        variant="standard"
                        type="text"
                        id="lastName"
                        name="last_name"
                        placeholder="Last Name"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={9}>
                      <FormLabel htmlFor="email">Your email address</FormLabel>
                      <TextField
                        onChange={handleFormInputs}
                        variant="standard"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={9}>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <TextField
                        onChange={handleFormInputs}
                        variant="standard"
                        type="text"
                        id="password"
                        name="password"
                        placeholder="Password"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    justifyContent="flex-end"
                    className="nextButton"
                    sx={{ gap: "1rem" }}
                  >
                    <Button variant="outlined" onClick={""}>
                      <ArrowLeftIcon />
                      Back
                    </Button>
                    <Button variant="contained" onClick={""}>
                      Volunteer
                    </Button>
                  </Grid>
                  {error && <span>Wrong Email or Password!</span>}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VolunteerMeal;
