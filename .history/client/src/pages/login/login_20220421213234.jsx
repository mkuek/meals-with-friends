import { Button } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../../components/navBar/Navbar";
import "./login.scss";

const login = () => {
  const [error, setError] = useState(false);
  return (
    <>
      <Navbar />
      <div className="login">
        <form action="">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <Button variant="contained" type="submit">
            Login
          </Button>
          {error && <span>Wrong Email or Password!</span>}
        </form>
      </div>
    </>
  );
};

export default login;
