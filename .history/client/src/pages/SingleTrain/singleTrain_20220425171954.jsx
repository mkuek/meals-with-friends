import React from "react";
import Navbar from "../../components/navBar/Navbar";

const SingleTrain = () => {
  return (
    <>
      <Navbar />
      <div className="singleTrain">
        <div className="title">Meal Train Title</div>
        <div className="left">left</div>
        <div className="right">right</div>
      </div>
    </>
  );
};

export default SingleTrain;
