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
} from "firebase/firestore";
import { db } from "../../firebase";
import { Link, useParams } from "react-router-dom";
import { Badge, Button, Chip, Typography } from "@mui/material";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { AuthContext } from "../../context/authContext";
import GroupIcon from "@mui/icons-material/Group";

const SingleTrain = () => {
  const [trainInfo, setTrainInfo] = useState([]);
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
  // useEffect(() => {
  //   getUserData();
  // }, [trainInfo]);

  return (
    <>
      <Navbar />
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
            <Button variant="contained" size="small">
              <EditIcon fontSize="small" />
              Make Changes
            </Button>
          </div>
        </div>
        <div className="body">
          <div className="left">
            <div className="photo">
              <Button variant="contained" size="small">
                <AddIcon fontSize="small" />
                Add Photo
              </Button>
              <Typography variant="subtitle1" component="div">
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
              <Typography variant="subtitle1" component="div" fontWeight="bold">
                Recipient
              </Typography>
              <Typography variant="subtitle1" component="div" color="#337ab7">
                {`${trainInfo.meal_recipient}`}
              </Typography>
              <Typography variant="subtitle1" component="div" color="#337ab7">
                Number of Participants:
                <Chip
                  color="primary"
                  size="small"
                  label={trainInfo.meal_members.length}
                />
              </Typography>
              <Button variant="contained" size="small">
                Share
              </Button>
            </div>
            <div className="donate">donate</div>
            <div className="giftCard">giftCard</div>
          </div>
          <div className="right">right</div>
        </div>
      </div>
    </>
  );
};

export default SingleTrain;
