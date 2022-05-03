import React, { useContext, useState } from "react";
import "./register.scss";
import Navbar from "../../components/navBar/Navbar";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { Button, FormLabel, Grid, TextField } from "@mui/material";
import { auth } from "../../firebase";
import { async } from "@firebase/util";

const Register = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formContents, setFormContents] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        formContents.email,
        formContents.password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        ...formContents,
        created: serverTimestamp,
      });
    } catch (error) {
      setError(true);
      console.log(error.message);
      // ..
    }
  };

  const handleFormInputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormContents({
      ...formContents,
      [name]: value,
    });
    console.log(formContents);
  };

  return (
    <>
      <Navbar />
      <div className="register">
        <div className="title">Create user account</div>
        <form onSubmit={handleSubmit}>
          <div className="formHeader">Create a MealTrain.com account</div>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <TextField
                onChange={handleFormInputs}
                variant="standard"
                type="text"
                id="firstName"
                name="first_name"
                placeholder="First Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <TextField
                onChange={handleFormInputs}
                variant="standard"
                type="text"
                id="lastName"
                name="last_name"
                placeholder="Last Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel htmlFor="email">Your email address</FormLabel>
              <TextField
                onChange={handleFormInputs}
                variant="standard"
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                onChange={handleFormInputs}
                variant="standard"
                type="text"
                id="password"
                name="password"
                placeholder="Password"
                fullWidth
              />
            </Grid>
          </Grid>
          <Button className="signInButton" variant="contained" type="submit">
            Create User Account
          </Button>
          {error && <span>Wrong Email or Password!</span>}
        </form>
        <div className="signIn">
          Used Meal Train before? <a href="/login">Sign In</a>
        </div>
      </div>
    </>
  );
};

export default Register;
