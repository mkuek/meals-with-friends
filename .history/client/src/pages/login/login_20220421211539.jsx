import { Button } from "@mui/material";
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
          <Button variant="outlined" type="submit">
            Login
          </Button>
        </form>
      </div>
    </>
  );
};

export default login;
