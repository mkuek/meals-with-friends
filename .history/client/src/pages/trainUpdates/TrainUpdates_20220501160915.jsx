import React, { useContext, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import "./trainUpdates.scss";
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
import moment from "moment";

const TrainUpdates = () => {
  const [trainInfo, setTrainInfo] = useState({});
  const [formContents, setFormContents] = useState({
    update_title: "",
    update_text: "",
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
      <div className="update">
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
                  Update
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
                  padding: "3rem",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  marginTop: "1rem",
                  border: "1px solid rgba(216, 216, 216, 0.75)",
                  borderRadius: "5px",
                  boxShadow: 2,
                }}
              >
                <Grid item xs={12} className="form-header">
                  <Typography
                    variant="subtitle1"
                    component="div"
                    fontWeight="bold"
                  >
                    Your friends want to hear from you
                  </Typography>
                  <Typography variant="body" component="div">
                    Use the Updates tab to share updates and photos as they
                    occur. Start your post by adding a catchy title below.
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ marginBottom: "1rem" }}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    fontWeight="bold"
                  >
                    Date Posted
                  </Typography>
                  <Typography variant="body" component="div">
                    {moment().format("MMMM D, YYYY")}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormLabel htmlFor="update_title">Email</FormLabel>
                  <TextField
                    onChange={handleFormInputs}
                    variant="standard"
                    type="text"
                    id="update_title"
                    name="update_title"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormLabel htmlFor="update_text">Address</FormLabel>
                  <TextField
                    onChange={handleFormInputs}
                    variant="standard"
                    type="text"
                    id="update_text"
                    name="update_text"
                    fullWidth
                  />
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
