import React, { useContext, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import "./editMeal.scss";
import {
  Button,
  FormLabel,
  Grid,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  MenuItem,
  Select,
} from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Navbar from "../../components/navBar/Navbar";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import CheckIcon from "@mui/icons-material/Check";
import { Box } from "@mui/system";

const EditMeal = () => {
  const [trainInfo, setTrainInfo] = useState({});
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

  const navigate = useNavigate();
  const { trainId } = useParams();
  const getData = async () => {
    const trainListQuery = doc(db, "train_info", trainId);
    const querySnapshot = await getDoc(trainListQuery);
    // console.log(querySnapshot.data());
    setTrainInfo(querySnapshot.data());
  };

  useEffect(() => {
    getData();
  }, []);

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
            <div>
              <Grid container spacing={1}>
                <Grid item xs>
                  <Typography variant="h4" component="div">
                    Edit event details
                  </Typography>
                  <Box sx={{ display: "flex", gap: "1rem" }}>
                    <Button
                      variant="outlined"
                      sx={{
                        display: "flex",
                        padding: "0.5rem",
                      }}
                    >
                      <ArrowLeft />
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#5cb85c",
                        color: "#FFF",
                        display: "flex",
                        gap: "0.25rem",
                        padding: "0.5rem",
                        "&:hover": { backgroundColor: "#50a050" },
                      }}
                    >
                      <CheckIcon />
                      Save Changes
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <TextField
                    onChange={handleFormInputs}
                    variant="standard"
                    type="text"
                    id="name"
                    name="meal_recipient"
                    placeholder="Recipient name"
                    value={trainInfo.meal_recipient}
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
                    value={trainInfo.email}
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
                    value={trainInfo.address}
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
                    value={trainInfo.city}
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
                    value="GA"
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
                    value={trainInfo.zipcode}
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
                    value={trainInfo.phone}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditMeal;
