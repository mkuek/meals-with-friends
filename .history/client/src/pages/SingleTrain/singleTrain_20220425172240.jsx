import React from "react";
import Navbar from "../../components/navBar/Navbar";
import "./singleTrain.scss";

const SingleTrain = () => {
  return (
    <>
      <Navbar />
      <div className="singleTrain">
        <div className="title">Meal Train Title</div>
        <div className="body">
          <div className="left">left</div>
          <div className="right">right</div>
        </div>
      </div>
    </>
  );
};

export default SingleTrain;
