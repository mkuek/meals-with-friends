import React, { useEffect, useState } from "react";
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

const SingleTrain = () => {
  const [trainInfo, setTrainInfo] = useState([]);
  const { trainId } = useParams();

  const getData = async () => {
    const q = doc(db, "train_info", trainId);
    const querySnapshot = await getDoc(q);
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   trainList.push({ id: doc.id, data: doc.data() });
    //   console.log(doc.id, " => ", doc.data());
    // });
    console.log(querySnapshot.data());
    setTrainInfo(querySnapshot.data());
    // const { train_id } = querySnapshot.data();
    // const q2 = await getDoc(doc(db, "train_info", train_id));
    // console.log(querySnapshot);
  };

  useEffect(() => {
    getData();
  }, []);

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
                <AddIcon />
                Add Photo
              </Button>
              <p>Adding a photo can lead to greater participation</p>
            </div>
            <div className="organize">organize</div>
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
