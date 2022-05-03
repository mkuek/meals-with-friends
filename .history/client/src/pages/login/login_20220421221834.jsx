import { Button } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../../components/navBar/Navbar";
import "./login.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(process.env.REACT_APP_FIREBASE_KEY);
      })
      .catch((error) => {
        setError(true);
        console.log(error.message);
        console.log(process.env.REACT_APP_FIREBASE_KEY);
        // ..
      });
  };
  return (
    <>
      <Navbar />
      <div className="login">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
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
