import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/navBar/Navbar";
import { Button, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import "./dashboard.scss";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { AuthContext } from "../../context/authContext";
import { db } from "../../firebase";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);

  const getData = async () => {
    const q = doc(db, "users", "train_info");
    const querySnapshot = await getDoc(q);
    // querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });
    console.log(querySnapshot);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="title">My Dashboard</div>
        <div className="dashboardBody">
          <p>
            Below is a list of all of the events you have created or have been
            invited to participate in.
          </p>
          <div className="list">
            <div className="left">
              <img
                src="https://www.mealtrain.com/content/img/app/tokens/appointments-sm.png"
                alt="empty pic"
              />
            </div>
            <div className="center">Meal Train for:</div>
            <div className="right">
              <Button variant="contained">
                <SearchIcon fontSize="small" />
                Open
              </Button>
              <Button variant="outlined">
                <EditIcon fontSize="small" />
                Make Changes
              </Button>
            </div>
          </div>
          <Divider style={{ width: "100%" }} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
