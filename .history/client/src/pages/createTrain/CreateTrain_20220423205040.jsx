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
  Paper,
  styled,
  TextField,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";

const CreateTrain = () => {
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
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [value, setValue] = useState(0);
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });
  const [formContents, setFormContents] = useState({
    meal_recipient: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipcodezip: "",
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleStepOne = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // setFormContents({
    //   ...formContents,
    //   [name]: value,
    // });
    console.log(name, value);
  };
  return (
    <>
      <Navbar />
      <div className="title">Start a Meal Train?? page</div>
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
                  <Tab label="1 Enter recipient" {...a11yProps(0)} />
                  <Tab label="2 Select dates" {...a11yProps(1)} />
                  <Tab label="3 Add preferences" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                This Meal Train page is for:
                <form onSubmit={handleStepOne}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <TextField
                        onChange={handleStepOne}
                        variant="standard"
                        type="text"
                        id="name"
                        name="meal_recipient"
                        placeholder="Recipient name"
                        value={formContents.meal_recipient}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <TextField
                        onChange={handleStepOne}
                        variant="standard"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Recipient email address"
                        value={formContents.email}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel htmlFor="address">Address</FormLabel>
                      <TextField
                        onChange={handleStepOne}
                        variant="standard"
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Optional"
                        value={formContents.address}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <FormLabel htmlFor="city">City</FormLabel>
                      <TextField
                        onChange={handleStepOne}
                        variant="standard"
                        type="text"
                        id="city"
                        name="city"
                        value={formContents.city}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <FormLabel htmlFor="state">State</FormLabel>
                      <TextField
                        onChange={handleStepOne}
                        variant="standard"
                        type="text"
                        id="state"
                        name="state"
                        value={formContents.state}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <FormLabel htmlFor="zip">Postal Code</FormLabel>
                      <TextField
                        onChange={handleStepOne}
                        variant="standard"
                        type="text"
                        id="zip"
                        name="zipcode"
                        value={formContents.zipcode}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <FormLabel htmlFor="phone">Phone</FormLabel>
                      <TextField
                        onChange={handleStepOne}
                        variant="standard"
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Optional"
                        value={formContents.phone}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid container justify="flex-end" className="nextButton">
                    <Button variant="contained">
                      Next Step <ArrowRightIcon />
                    </Button>
                  </Grid>
                </form>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div className="calendar">
                  <Grid container justify="flex-end" className="calendar">
                    Click all the days when meals can be delivered
                    <Calendar
                      value={selectedDayRange}
                      onChange={setSelectedDayRange}
                      shouldHighlightWeekends
                    />
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
                        variant="standard"
                        type="number"
                        id="adults"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormLabel htmlFor="kids"># kids to cook for</FormLabel>
                      <TextField
                        variant="standard"
                        type="text"
                        id="kids"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel htmlFor="delivery">
                        Preferred delivery time
                      </FormLabel>
                      <TextField
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
                    <Button variant="contained">Finish Setup</Button>
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
