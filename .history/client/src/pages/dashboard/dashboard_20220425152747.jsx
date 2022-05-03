import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/navBar/Navbar";
import { Button, Divider, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
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
  const [trainData, setTrainData] = useState([]);
  const { currentUser } = useContext(AuthContext);

  const getData = async () => {
    let trainList = [];
    const q = query(
      collection(db, "train_info"),
      where("meal_members", "array-contains", currentUser.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      trainList.push({ id: doc.id, data: doc.data() });
      console.log(doc.id, " => ", doc.data());
    });
    console.log(trainList);
    setTrainData(trainList);
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

      <div className="dashboard">
        <div className="title">My Dashboard</div>
        <div className="dashboardBody">
          <p>
            Below is a list of all of the events you have created or have been
            invited to participate in.
          </p>
          {trainData &&
            trainData.map((train, index) => (
              <>
                <div className="list">
                  <div className="left">
                    {train.data.img === "" ? (
                      <img src={train.data.img} alt="meal-train-image" />
                    ) : (
                      <img
                        src="https://www.mealtrain.com/content/img/app/tokens/appointments-sm.png"
                        alt="no-picture-rovided"
                      />
                    )}
                  </div>
                  <div className="center">
                    <Typography variant="body1" component="div">
                      Meal Train for:
                    </Typography>
                    <Typography variant="h4" component="div">
                      {train.data.meal_recipient}
                    </Typography>
                  </div>
                  <div className="right">
                    <Button variant="contained" size="small">
                      <SearchIcon fontSize="small" />
                      Open
                    </Button>
                    <Button variant="outlined" size="small">
                      {train.data.created_by == currentUser.uid ? (
                        <>
                          <EditIcon fontSize="small" />
                          Make Changes
                        </>
                      ) : (
                        <>
                          <DeleteIcon fontSize="small" />
                          Remove Me
                        </>
                      )}
                    </Button>
                  </div>
                </div>
                <Divider style={{ width: "100%" }} />
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
