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
import { useParams } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { AuthContext } from "../../context/authContext";
import { async } from "@firebase/util";

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
    const userQuery = doc(db, "users", trainInfo.created_by);
    const querySnapshot = await getDoc(userQuery);
    console.log(querySnapshot.data());
    setUserInfo(querySnapshot.data());
  };

  useEffect(() => {
    getData();
    console.log(currentUser);
  }, []);
  useEffect(() => {
    getUserData();
  }, [trainInfo]);

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
              <Typography variant="subtitle1" component="div">
                Organizer
              </Typography>
              <Typography variant="body1" component="div">
                {`${currentUser.first_name} ${currentUser.last_name}`}
              </Typography>
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
