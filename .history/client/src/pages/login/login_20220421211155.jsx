import React from "react";
import Navbar from "../../components/navBar/Navbar";
import "./login.scss";

const login = () => {
  return (
    <>
      <Navbar />
      <div className="login">
        <form action="">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default login;
