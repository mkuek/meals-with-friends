import React, { useContext, useState } from "react";
import "./register.scss";
import Navbar from "../../components/navBar/Navbar";
import { Button } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Register = () => {
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
    <div className="register">
      <Navbar />
      <div className="login">
        <div className="title">Create user account</div>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <TextField
              onChange={handleFormInputs}
              variant="standard"
              type="text"
              id="name"
              name="meal_recipient"
              placeholder="Recipient name"
              fullWidth
            />
          </Grid>
        </Grid>
        <form onSubmit={handleSubmit}>
          <div className="formHeader">Create a MealTrain.com account</div>
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
          {error && <span>Wrong Email or Password!</span>}
        </form>
        <div className="signIn">
          Used Meal Train before? <a href="/login">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
