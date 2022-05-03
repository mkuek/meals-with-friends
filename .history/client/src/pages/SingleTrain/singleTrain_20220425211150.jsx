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
import { Typography } from "@mui/material";

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
            <p>{trainInfo.meal_recipient}</p>
          </div>
          <div className="title-right"></div>
        </div>
        <div className="body">
          <div className="left">left</div>
          <div className="right">right</div>
        </div>
      </div>
    </>
  );
};

export default SingleTrain;
