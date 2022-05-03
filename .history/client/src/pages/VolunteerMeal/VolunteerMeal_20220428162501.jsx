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
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
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
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import moment from "moment";
import Navbar from "../../components/navBar/Navbar";

const VolunteerMeal = () => {
  const [trainInfo, setTrainInfo] = useState({ meal_members: "0" });
  const [userInfo, setUserInfo] = useState([]);

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

  return (
    <>
      <Navbar />
      {trainInfo && (
        <div className="singleTrain">
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
            <div className="left">
              <div className="photo">
                <Button variant="contained" size="small">
                  Add Photo
                </Button>
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ lineHeight: 1 }}
                >
                  Adding a photo can lead to greater participation
                </Typography>
              </div>
              <div className="organize">
                <Typography
                  variant="subtitle1"
                  component="div"
                  fontWeight="bold"
                  paddingBottom={0}
                >
                  Organizer
                </Typography>
                <Typography variant="subtitle1" component="div" color="#337ab7">
                  {`${userInfo.first_name} ${userInfo.last_name}`}
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="div"
                  fontWeight="bold"
                >
                  Recipient
                </Typography>
                <Typography variant="subtitle1" component="div" color="#337ab7">
                  {`${trainInfo.meal_recipient}`}
                </Typography>
                <Typography variant="subtitle1" component="div" color="#337ab7">
                  Number of Participants:
                </Typography>
                <Button variant="contained" size="small">
                  Share
                </Button>
              </div>
              <div className="donate">
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ lineHeight: 1 }}
                >
                  For those who live too far away or can't cook.
                </Typography>
                <Button variant="contained" size="small">
                  Activate Donations
                </Button>
              </div>
              <div className="giftCard">
                <div className="gift-title">
                  <Typography variant="h5" component="div" fontWeight="bold">
                    Gift Cards
                  </Typography>
                </div>
                <div className="gift-body">
                  <Button
                    variant="contained"
                    size="small"
                    href="https://grubhub.cashstar.com/store/recipient?irgwc=1&mp=Meal+Train&utm_source=Meal+Train&utm_medium=content_paid&utm_campaign=growth_radius-network&utm_channel=other&clickid=SOyRGt1LczOdTSAzaSzMsxqNUkGX8931RXYt2Q0&SharedID=&chiri_umami_homepage_loggedout_headerBanner=xyz&blockNavi=true&locale=en-us"
                  >
                    Grubhub Gift Card
                  </Button>
                  <Typography variant="caption" component="div">
                    (Restaurant delivery from Grubhub)
                  </Typography>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="header">
                <img
                  src="https://www.mealtrain.com/content/img/3rd/grubhub_widget_728x90.png"
                  alt="grubhub-banner"
                />
              </div>
              <div className="body"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VolunteerMeal;
