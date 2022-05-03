import React from "react";
import Navbar from "../../components/navBar/Navbar";

const register = () => {
  return (
    <div className="register">
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
          {error && <span>Wrong Email or Password!</span>}
        </form>
        <div className="signUp">
          Don't have an account? <a href="/register">Create a free account</a>
        </div>
      </div>
    </div>
  );
};

export default register;
