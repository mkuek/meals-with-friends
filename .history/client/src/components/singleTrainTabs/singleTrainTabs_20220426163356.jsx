import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./singleTrainTabs.scss";
import {
  Button,
  FormLabel,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import EditIcon from "@mui/icons-material/Edit";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../context/authContext";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const SingleTrainTabs = ({ trainInfo }) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [formContents, setFormContents] = useState({
    meal_recipient: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
    meal_date_start: "",
    meal_date_end: "",
    meal_adults: "",
    meal_kids: "",
    meal_delivery_time: "",
    meal_instructions: "",
    meal_favorites: "",
    meal_non_favorite: "",
    meal_allergy: "",
    meal_members: "",
    img: "",
  });

  const handleFormInputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormContents({
      ...formContents,
      [name]: value,
    });
  };

  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });

  const updateDates = () => {
    setFormContents({
      ...formContents,
      meal_date_start: [selectedDayRange.from],
      meal_date_end: [selectedDayRange.to],
    });
  };

  const { currentUser, dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    try {
      const res = await addDoc(collection(db, "train_info"), {
        ...formContents,
        created_time: serverTimestamp(),
        created_by: currentUser.uid,
        meal_members: currentUser.uid,
      });
      console.log(res._key.path.segments[1]);
      const addUserToTrain = await setDoc(
        doc(db, "users", currentUser.uid),
        {
          train_id: arrayUnion(res._key.path.segments[1]),
        },
        { merge: true }
      );
      alert("train info success");
    } catch (error) {
      console.log(error.message);
      // ..
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="fullWidth"
              centered
            >
              <Tab label="Calendar" />
              <Tab label="Updates" />
              <Tab label="Donations" />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <div className="about">
                    {trainInfo.train_description !== "" ? (
                      <div className="about-empty">
                        <Typography variant="h6" component="div">
                          Let everyone know why you are organizing this Meal
                          Train page.
                        </Typography>
                        <Button variant="contained" size="small">
                          <EditIcon fontSize="small" />
                          Tell the story
                        </Button>
                      </div>
                    ) : (
                      <div className="about-body">
                        <Typography
                          variant="h5"
                          component="div"
                          fontWeight="bold"
                        >
                          About this Meal Train page
                        </Typography>
                        <Typography variant="body1" component="div">
                          {trainInfo.train_description}
                        </Typography>
                      </div>
                    )}
                  </div>
                </Grid>
              </Grid>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="calendar">
              Click all the days when meals can be delivered
              <Grid container className="calendar">
                <Calendar
                  value={selectedDayRange}
                  onChange={setSelectedDayRange}
                  shouldHighlightWeekends
                />
              </Grid>
              <Grid container justify="flex-end" className="nextButton">
                <Button variant="outlined" onClick={() => setValue(0)}>
                  <ArrowLeftIcon />
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    updateDates();
                    setValue(2);
                  }}
                >
                  Next Step <ArrowRightIcon />
                </Button>
              </Grid>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <form action="">
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <FormLabel htmlFor="adults"># adults to cook for</FormLabel>
                  <TextField
                    onChange={handleFormInputs}
                    name="meal_adults"
                    variant="standard"
                    type="number"
                    id="adults"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormLabel htmlFor="kids"># kids to cook for</FormLabel>
                  <TextField
                    onChange={handleFormInputs}
                    name="meal_kids"
                    variant="standard"
                    type="number"
                    id="kids"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormLabel htmlFor="delivery">
                    Preferred delivery time
                  </FormLabel>
                  <TextField
                    onChange={handleFormInputs}
                    name="meal_delivery_time"
                    variant="standard"
                    type="text"
                    id="delivery"
                    placeholder="Example: 'from 5PM - 6PM' or 'around dinnertime'"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel htmlFor="instructions">
                    Special instructions
                  </FormLabel>
                  <TextField
                    onChange={handleFormInputs}
                    name="meal_instructions"
                    type="text"
                    id="instructions"
                    multiline
                    rows={4}
                    fullWidth
                    placeholder="List any dropoff, delivery, or other instructions"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel htmlFor="favorite">
                    Favorite meals/ restaurants
                  </FormLabel>
                  <TextField
                    onChange={handleFormInputs}
                    name="meal_favorites"
                    type="text"
                    id="favorite"
                    fullWidth
                    multiline
                    rows={4}
                    placeholder="Examples: lasagna, chili, etc"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel htmlFor="noFav">Least Favorite meals</FormLabel>
                  <TextField
                    onChange={handleFormInputs}
                    name="meal_non_favorite"
                    type="text"
                    id="noFav"
                    fullWidth
                    multiline
                    rows={4}
                    placeholder="Example: anchovies, broccoli, etc"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel htmlFor="allergy">
                    Allergies or dietary restrictions
                  </FormLabel>
                  <TextField
                    onChange={handleFormInputs}
                    name="meal_allergy"
                    type="text"
                    id="allergy"
                    fullWidth
                    multiline
                    rows={4}
                    placeholder="Example: allergic to shellfish, vegan, gluten-free, etc"
                  />
                </Grid>
              </Grid>
              <Grid container justify="flex-end" className="nextButton">
                <Button variant="outlined" onClick={() => setValue(1)}>
                  <ArrowLeftIcon />
                  Back
                </Button>
                <Button variant="contained" onClick={handleSubmit}>
                  Finish Setup
                </Button>
              </Grid>
            </form>
          </TabPanel>
        </Box>
      </Grid>
    </Box>
  );
};

export default SingleTrainTabs;
