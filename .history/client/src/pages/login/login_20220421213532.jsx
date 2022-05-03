import { Button } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../../components/navBar/Navbar";
import "./login.scss";

const Login = () => {
  const [error, setError] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar />
      <div className="login">
        <form onClick={handleSubmit}>
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

export default Login;
