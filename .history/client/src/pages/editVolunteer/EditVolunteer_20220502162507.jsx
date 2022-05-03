import React, { useContext, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import "./editVolunteer.scss";
import {
  Button,
  FormLabel,
  Grid,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Navbar from "../../components/navBar/Navbar";
import moment from "moment";
import { Box } from "@mui/system";

const EditVolunteer = () => {
  const [trainInfo, setTrainInfo] = useState({});
  const [userInfo, setUserInfo] = useState([]);
  const [title, setTitle] = useState();
  const [meals, setMeals] = useState();
  const [error, setError] = useState(false);
  const [formContents, setFormContents] = useState([]);

  const { trainId, mealId } = useParams();
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const getData = async () => {
    const trainListQuery = doc(db, "train_info", trainId);
    const querySnapshot = await getDoc(trainListQuery);
    // console.log(querySnapshot.data());
    setTrainInfo(querySnapshot.data());
    setTitle(
      moment(
        querySnapshot.data().individual_meals[mealId].date,
        "YYYY-MM-DD"
      ).format("MMMM D, YYYY")
    );
    setMeals(querySnapshot.data().individual_meals);
  };

  const getUserData = async () => {
    const userQuery = doc(db, "users", currentUser.uid);
    const querySnapshot = await getDoc(userQuery);
    setUserInfo(querySnapshot.data());
  };

  useEffect(() => {
    getData();
    getUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    meals[mealId].meal_name = formContents.meal_name;
    meals[mealId].notes = formContents.notes || "";
    meals[mealId].volunteer = userInfo;
    meals[mealId].title = formContents.meal_name;
    try {
      const addIndividualMeal = await updateDoc(
        doc(db, "train_info", trainId),
        {
          individual_meals: meals,
        }
      );
      alert("update success!");
      navigate(`/trains/${trainId}`);
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
    meals[mealId].meal_name = formContents.meal_name;
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
                    {trainInfo.meal_adults &&
                      `Adults: ${Number(trainInfo.meal_adults)} `}
                    {trainInfo.meal_kids &&
                      `Kids:${Number(trainInfo.meal_kids)}`}
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
                    {trainInfo.meal_delivery_time || "Not Specified"}
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
                    {trainInfo.meal_favorites || "Not Specified"}
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
                    {trainInfo.meal_non_favorite || "Not Specified"}
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
                  <Typography
                    variant="subtitle2"
                    component="div"
                    marginTop="0.25rem"
                  >
                    {trainInfo.meal_allergies || "Not Specified"}
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
                    {trainInfo.meal_instructions || "Not Specified"}
                  </Typography>
                </Grid>
              </div>
              <div className="right">
                <form onSubmit={handleSubmit}>
                  <div className="form-header">
                    Please enter a meal description and any notes.
                  </div>
                  <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={9}>
                      <Typography
                        variant="subtitle1"
                        component="div"
                        fontWeight="bold"
                      >
                        {title}
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <FormLabel htmlFor="meal">Meal</FormLabel>
                      <TextField
                        onChange={handleFormInputs}
                        variant="standard"
                        type="text"
                        id="meal"
                        name="meal_name"
                        placeholder="Meal name"
                        fullWidth
                        value={meals && meals[mealId].meal_name}
                      />
                    </Grid>
                    <Grid item xs={9}>
                      <FormLabel htmlFor="notes">Notes</FormLabel>
                      <TextField
                        onChange={handleFormInputs}
                        variant="standard"
                        type="text"
                        id="notes"
                        name="notes"
                        placeholder="Notes for meal"
                        fullWidth
                        value={meals && meals[mealId].meal_notes}
                      />
                    </Grid>
                    <Grid item xs={9}>
                      <FormGroup htmlFor="reminder">
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="Reminder Email"
                        />
                      </FormGroup>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    justifyContent="flex-end"
                    className="nextButton"
                    sx={{ marginTop: "1rem", gap: "1rem" }}
                  >
                    <Button variant="outlined" onClick={() => navigate(-1)}>
                      <ArrowLeftIcon />
                      Back
                    </Button>
                    <Button variant="contained" onClick={handleSubmit}>
                      Volunteer
                    </Button>
                  </Grid>
                  <Box
                    sx={{
                      color: "red",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {error && <span>Please enter a meal name</span>}
                  </Box>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditVolunteer;
