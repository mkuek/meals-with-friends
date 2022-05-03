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
              <Grid item xs sx={{ height: "100px", width: "75%" }}>
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
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainUpdates;
