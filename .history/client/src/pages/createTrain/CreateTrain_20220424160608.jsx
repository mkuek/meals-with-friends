import React, { useState } from "react";
import Navbar from "../../components/navBar/Navbar";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./createTrain.scss";
import {
  Button,
  FormLabel,
  Grid,
  MenuItem,
  Paper,
  Select,
  styled,
  TextField,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import States from "../../components/States";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

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

const CreateTrain = () => {
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
  });

  const handleFormInputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormContents({
      ...formContents,
      [name]: value,
    });
    console.log(formContents);
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
    console.log(formContents);
  };

  const handleSubmit = async (e) => {
    try {
      await addDoc(collection(db, "train_info"), {
        ...formContents,
        created: serverTimestamp(),
      });
      alert("train info success");
    } catch (error) {
      console.log(error.message);
      // ..
    }
  };

  return (
    <>
      <Navbar />
      <div className="title">Start a Meal Train® page</div>
      <div className="trainForm">
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
                  <Tab label="1 Enter recipient" />
                  <Tab label="2 Select dates" />
                  <Tab label="3 Add preferences" />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                This Meal Train page is for:
                <div>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <TextField
                        onChange={handleFormInputs}
                        variant="standard"
                        type="text"
                        id="name"
                        name="meal_recipient"
                        placeholder="Recipient name"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <TextField
                        onChange={handleFormInputs}
                        variant="standard"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Recipient email address"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel htmlFor="address">Address</FormLabel>
                      <TextField
                        onChange={handleFormInputs}
                        variant="standard"
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Optional"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <FormLabel htmlFor="city">City</FormLabel>
                      <TextField
                        onChange={handleFormInputs}
                        variant="standard"
                        type="text"
                        id="city"
                        name="city"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <FormLabel htmlFor="state">State</FormLabel>
                      <Select
                        name="state"
                        onChange={handleFormInputs}
                        variant="standard"
                        fullWidth
                        value={formContents.state}
                      >
                        <MenuItem value="">""</MenuItem>
                        <MenuItem value="AL">Alabama</MenuItem>
                        <MenuItem value="AK">Alaska</MenuItem>
                        <MenuItem value="AZ">Arizona</MenuItem>
                        <MenuItem value="AR">Arkansas</MenuItem>
                        <MenuItem value="CA">California</MenuItem>
                        <MenuItem value="CO">Colorado</MenuItem>
                        <MenuItem value="CT">Connecticut</MenuItem>
                        <MenuItem value="DE">Delaware</MenuItem>
                        <MenuItem value="DC">District Of Columbia</MenuItem>
                        <MenuItem value="FL">Florida</MenuItem>
                        <MenuItem value="GA">Georgia</MenuItem>
                        <MenuItem value="HI">Hawaii</MenuItem>
                        <MenuItem value="ID">Idaho</MenuItem>
                        <MenuItem value="IL">Illinois</MenuItem>
                        <MenuItem value="IN">Indiana</MenuItem>
                        <MenuItem value="IA">Iowa</MenuItem>
                        <MenuItem value="KS">Kansas</MenuItem>
                        <MenuItem value="KY">Kentucky</MenuItem>
                        <MenuItem value="LA">Louisiana</MenuItem>
                        <MenuItem value="ME">Maine</MenuItem>
                        <MenuItem value="MD">Maryland</MenuItem>
                        <MenuItem value="MA">Massachusetts</MenuItem>
                        <MenuItem value="MI">Michigan</MenuItem>
                        <MenuItem value="MN">Minnesota</MenuItem>
                        <MenuItem value="MS">Mississippi</MenuItem>
                        <MenuItem value="MO">Missouri</MenuItem>
                        <MenuItem value="MT">Montana</MenuItem>
                        <MenuItem value="NE">Nebraska</MenuItem>
                        <MenuItem value="NV">Nevada</MenuItem>
                        <MenuItem value="NH">New Hampshire</MenuItem>
                        <MenuItem value="NJ">New Jersey</MenuItem>
                        <MenuItem value="NM">New Mexico</MenuItem>
                        <MenuItem value="NY">New York</MenuItem>
                        <MenuItem value="NC">North Carolina</MenuItem>
                        <MenuItem value="ND">North Dakota</MenuItem>
                        <MenuItem value="OH">Ohio</MenuItem>
                        <MenuItem value="OK">Oklahoma</MenuItem>
                        <MenuItem value="OR">Oregon</MenuItem>
                        <MenuItem value="PA">Pennsylvania</MenuItem>
                        <MenuItem value="RI">Rhode Island</MenuItem>
                        <MenuItem value="SC">South Carolina</MenuItem>
                        <MenuItem value="SD">South Dakota</MenuItem>
                        <MenuItem value="TN">Tennessee</MenuItem>
                        <MenuItem value="TX">Texas</MenuItem>
                        <MenuItem value="UT">Utah</MenuItem>
                        <MenuItem value="VT">Vermont</MenuItem>
                        <MenuItem value="VA">Virginia</MenuItem>
                        <MenuItem value="WA">Washington</MenuItem>
                        <MenuItem value="WV">West Virginia</MenuItem>
                        <MenuItem value="WI">Wisconsin</MenuItem>
                        <MenuItem value="WY">Wyoming</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <FormLabel htmlFor="zip">Postal Code</FormLabel>
                      <TextField
                        onChange={handleFormInputs}
                        variant="standard"
                        type="text"
                        id="zip"
                        name="zipcode"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <FormLabel htmlFor="phone">Phone</FormLabel>
                      <TextField
                        onChange={handleFormInputs}
                        variant="standard"
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Optional"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid container justify="flex-end" className="nextButton">
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleSubmit();
                        setValue(1);
                      }}
                    >
                      Next Step <ArrowRightIcon />
                    </Button>
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
                        handleSubmit();
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
                      <FormLabel htmlFor="adults">
                        # adults to cook for
                      </FormLabel>
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
                      <FormLabel htmlFor="noFav">
                        Least Favorite meals
                      </FormLabel>
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
      </div>
    </>
  );
};

export default CreateTrain;
