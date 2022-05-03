import React from "react";
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

const SingleTrain = () => {
  const { trainId } = useParams();

  const getData = async () => {
    let trainData = [];
    const q = doc((db, "train_info", trainId));
    const querySnapshot = await getDoc(q);
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   trainList.push({ id: doc.id, data: doc.data() });
    //   console.log(doc.id, " => ", doc.data());
    // });
    console.log(querySnapshot);
    // setTrainData(trainList);
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
            <p>Meal Train for</p>
            <p>Meal Train for</p>
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
