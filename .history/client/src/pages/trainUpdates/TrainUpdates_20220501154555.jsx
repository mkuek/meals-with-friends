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
  Divider,
  Box,
  Table,
} from "@mui/material";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Navbar from "../../components/navBar/Navbar";
import CheckIcon from "@mui/icons-material/Check";

const TrainUpdates = () => {
  const [formContents, setFormContents] = useState({
    update_titel: "",
    update_text: "",
  });

  const navigate = useNavigate();
  const { trainId } = useParams();

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
                    <FormLabel htmlFor="adults"># adults to cook for</FormLabel>
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
                      value={trainInfo.meal_adults}
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
                    <FormLabel htmlFor="noFav">Least Favorite meals</FormLabel>
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
    </>
  );
};

export default TrainUpdates;
