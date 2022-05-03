import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/navBar/Navbar";
import "./singleTrain.scss";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Badge, Button, Chip, Typography } from "@mui/material";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { AuthContext } from "../../context/authContext";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SingleTrainTabs from "../../components/singleTrainTabs/SingleTrainTabs";
import AddPhotoModal from "../../components/addPhotoModal/AddPhotoModal";
import moment from "moment";
import { create } from "@mui/material/styles/createTransitions";
const SingleTrain = () => {
  const [trainInfo, setTrainInfo] = useState({});
  const [userInfo, setUserInfo] = useState([]);
  const [trainLength, setTrainLength] = useState([]);
  const [openPhotoModal, setOpenPhotoModal] = useState({
    open: false,
    data: "",
  });
  const [eventList, setEventList] = useState([]);

  const navigate = useNavigate();
  const { trainId } = useParams();
  const { currentUser } = useContext(AuthContext);

  const getData = async () => {
    const trainListQuery = doc(db, "train_info", trainId);
    const querySnapshot = await getDoc(trainListQuery);
    if (querySnapshot.exists()) {
      setTrainInfo(querySnapshot.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const getUserData = async () => {
    const userQuery = doc(db, "users", currentUser.uid);
    const querySnapshot = await getDoc(userQuery);
    setUserInfo(querySnapshot.data());
  };

  const handleOpenPhotoModal = (data) =>
    setOpenPhotoModal({ open: true, data: data });
  const handleClosePhotoModal = () =>
    setOpenPhotoModal({ open: false, data: "" });

  useEffect(() => {
    getData();
    getUserData();
  }, []);
  useEffect(() => {
    createEvents(trainInfo);
  }, [trainInfo]);
  const createEvents = async (trainInfo) => {
    const dates = [];
    const startDate =
      moment(
        `${trainInfo.meal_date_start[0].year}-${
          trainInfo.meal_date_start[0].month
        }-${trainInfo.meal_date_start[0].day - 1}`,
        "YYYY-M-D"
      ) || moment().format("YYYY-M-D");
    const endDate =
      moment(
        `${trainInfo.meal_date_end[0].year}-${
          trainInfo.meal_date_end[0].month
        }-${trainInfo.meal_date_end[0].day + 1}`,
        "YYYY-M-D"
      ) || moment().format("YYYY-M-D");
    while (startDate.add(1, "days").diff(endDate) < 0) {
      dates.push(startDate.clone().toDate());
    }
    setTrainLength(dates);
    const eventListObject = [];

    try {
      alert("this ran");
      dates.map((date, index) => {
        eventListObject.push({
          title: trainInfo.individual_meals[index].title || "Available",
          date_formatted: moment(date).format("MMMM D YYYY, dddd"),
          date: moment(date).format("YYYY-MM-DD"),
          url: `/trains/${trainId}/volunteer/${index}`,
          volunteer: `${trainInfo.individual_meals[index].volunteer.first_name} ${trainInfo.individual_meals[index].volunteer.last_name}`,
          meal_name: trainInfo.individual_meals[index].meal_name,
          notes: trainInfo.individual_meals[index].notes,
          color:
            trainInfo.individual_meals[index].title === "Available"
              ? "#5cb85c"
              : "#3a87a",
        });
        console.log("event list:", eventListObject);
      });
    } catch (error) {
      dates.map((date, index) => {
        eventListObject.push({
          title: "Available",
          date_formatted: moment(date).format("MMMM D YYYY, dddd"),
          date: moment(date).format("YYYY-MM-DD"),
          url: `/trains/${trainId}/volunteer/${index}`,
          volunteer: `${trainInfo.individual_meals[index].volunteer.first_name} ${trainInfo.individual_meals[index].volunteer.last_name}`,
          meal_name: trainInfo.individual_meals[index].meal_name,
          notes: trainInfo.individual_meals[index].notes,
          color: "#5cb85c",
        });
        console.log("event list:", eventListObject);
      });
      const res = await setDoc(
        doc(db, "train_info", trainId),
        {
          individual_meals: eventListObject,
        },
        { merge: true }
      );
    }
    setEventList({
      events: eventListObject,
    });
    return eventListObject;
  };
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
            <div className="title-right">
              <Button variant="contained" size="small">
                <ForumOutlinedIcon fontSize="small" />
                Post an Update
              </Button>
              <Button
                variant="contained"
                size="small"
                onClick={() => navigate(`/trains/${trainId}/edit`)}
              >
                <EditIcon fontSize="small" />
                Make Changes
              </Button>
            </div>
          </div>
          <div className="body">
            <div className="left">
              <div className="photo">
                {trainInfo.img == "" ? (
                  <>
                    <AddPhotoModal
                      openPhotoModal={openPhotoModal}
                      setOpenPhotoModal={setOpenPhotoModal}
                      trainInfo={trainInfo}
                      handleOpenPhotoModal={handleOpenPhotoModal}
                      handleClosePhotoModal={handleClosePhotoModal}
                    />
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{ lineHeight: 1 }}
                    >
                      Adding a photo can lead to greater participation
                    </Typography>{" "}
                  </>
                ) : (
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    src={trainInfo.img}
                  ></img>
                )}
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
                  <Chip color="primary" size="small" label={"none"} />
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
                  <AttachMoneyIcon fontSize="small" />
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
              <div className="body">
                {trainInfo && (
                  <SingleTrainTabs
                    trainInfo={trainInfo}
                    trainLength={trainLength}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleTrain;
