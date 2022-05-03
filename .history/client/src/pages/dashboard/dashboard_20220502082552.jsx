import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/navBar/Navbar";
import { Button, Divider, Link, Typography } from "@mui/material";
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
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [trainData, setTrainData] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

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
    });
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
                    {train.data.img !== "" ? (
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
                      <Link href={`/trains/${train.id}`} underline="none">
                        {train.data.meal_recipient}
                      </Link>
                    </Typography>
                  </div>
                  <div className="right">
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => navigate(`/trains/${train.id}`)}
                    >
                      <SearchIcon fontSize="small" />
                      Open
                    </Button>
                    {train.data.created_by == currentUser.uid ? (
                      <>
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => navigate(`/trains/${trainId}/edit`)}
                        >
                          <EditIcon fontSize="small" />
                          Make Changes
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button variant="outlined" size="small">
                          <DeleteIcon fontSize="small" />
                          Remove Me
                        </Button>
                      </>
                    )}
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
