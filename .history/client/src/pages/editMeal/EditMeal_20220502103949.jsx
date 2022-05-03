import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import "./editMeal.scss";
import {
  Button,
  FormLabel,
  Grid,
  TextField,
  MenuItem,
  Select,
  Divider,
  Box,
  Table,
} from "@mui/material";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate, useParams } from "react-router-dom";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Navbar from "../../components/navBar/Navbar";
import CheckIcon from "@mui/icons-material/Check";

const EditMeal = () => {
  const [trainInfo, setTrainInfo] = useState({});

  const navigate = useNavigate();

  const { trainId } = useParams();

  const getData = async () => {
    const trainListQuery = doc(db, "train_info", trainId);
    const querySnapshot = await getDoc(trainListQuery);
    setTrainInfo(querySnapshot.data());
  };

  useEffect(() => {
    getData();
  }, []);

  const handleFormInputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setTrainInfo({
      ...trainInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      console.log(trainInfo);
      const addIndividualMeal = await setDoc(
        doc(db, "train_info", trainId),
        {
          ...trainInfo,
        },
        { merge: true }
      );
      alert("update success!");
      navigate(`/trains/${trainId}`);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Navbar />
      {trainInfo && (
        <div className="edit">
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
                <Grid item xs sx={{ height: "100px" }}>
                  <Typography variant="h4" component="div">
                    Edit event details
                  </Typography>
                  <Box
                    className="sticky"
                    sx={{
                      display: "flex",
                      gap: "1rem",
                      position: "sticky",
                      top: "100px",
                      left: "100px",
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        display: "flex",
                        padding: "0.5rem",
                      }}
                      onClick={() => navigate(-1)}
                    >
                      <ArrowLeftIcon />
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
                      onClick={handleSubmit}
                    >
                      <CheckIcon />
                      Save Changes
                    </Button>
                  </Box>
                </Grid>
                <Grid
                  container
                  sx={{
                    padding: "1rem",
                    marginTop: "1rem",
                    border: "1px solid rgba(216, 216, 216, 0.75)",
                    borderRadius: "5px",
                    boxShadow: 2,
                  }}
                >
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
                      value={trainInfo.state || ""}
                    >
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
                  <Divider
                    style={{
                      width: "100%",
                      marginTop: "2rem",
                      marginBottom: "2rem",
                    }}
                  />
                  <Grid item xs={12} sm={6} md={6}>
                    <FormLabel htmlFor="train_description">
                      About this Meal Train page
                    </FormLabel>
                    <TextField
                      onChange={handleFormInputs}
                      name="train_description"
                      type="text"
                      id="train_description"
                      value={trainInfo.train_description}
                      multiline
                      rows={4}
                      fullWidth
                    />
                  </Grid>
                  <Divider
                    style={{
                      width: "100%",
                      marginTop: "2rem",
                      marginBottom: "2rem",
                    }}
                  />
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
                        value={trainInfo.meal_adults}
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
                        value={trainInfo.meal_kids}
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
                        value={trainInfo.meal_delivery_time}
                        fullWidth
                      />
                    </Grid>
                    <Divider
                      style={{
                        width: "100%",
                        marginTop: "2rem",
                        marginBottom: "2rem",
                      }}
                    />
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
                        value={trainInfo.meal_kids}
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
                        value={trainInfo.meal_favorites}
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
                        value={trainInfo.meal_non_favorite}
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
                        value={trainInfo.meal_allergy}
                      />
                    </Grid>
                  </Grid>
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
