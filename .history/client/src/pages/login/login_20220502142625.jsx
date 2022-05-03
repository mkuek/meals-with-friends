import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import Navbar from "../../components/navBar/Navbar";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/dashboard");
      })
      .catch((error) => {
        setError(true);
        console.log(error.message);
        // ..
      });
  };
  return (
    <>
      <Navbar />
      <div className="login">
        <div className="title">Sign In</div>
        <form onSubmit={handleSubmit}>
          <div className="formHeader">
            Sign in with your MealTrain.com account
          </div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Your email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" type="submit">
            Sign In
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setEmail("demo@gmail.com");
              setPassword("password");
              handleSubmit();
            }}
          >
            Demo User
          </Button>
          {error && <span>Wrong Email or Password!</span>}
        </form>
        <div className="signUp">
          Don't have an account? <a href="/register">Create a free account</a>
        </div>
      </div>
    </>
  );
};

export default Login;
