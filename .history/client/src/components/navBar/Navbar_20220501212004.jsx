import React, { useContext } from "react";
import { AppBar, styled, Toolbar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./navBar.scss";

const StyledToobar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#fff",
  color: "black",
});

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, dispatch } = useContext(AuthContext);

  return (
    <AppBar position="sticky">
      <StyledToobar>
        <a href="/">
          <img src="https://www.mealtrain.com/content/img/mealtrain_primary_logo.png?v=1" />
        </a>
        <div className="right">
          {currentUser ? (
            <>
              <Button
                className="newTrain"
                onClick={() => navigate("/dashboard")}
                variant="text"
              >
                My Dashboard
              </Button>
              <Button
                className="newTrain"
                onClick={() => navigate("/trains/create")}
                variant="text"
              >
                Get Started
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  dispatch({ type: "LOGOUT" });
                  navigate("/login");
                }}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button
                className="signUp"
                variant="text"
                onClick={() => navigate("/register")}
              >
                Sign Up
              </Button>
              <Button variant="contained" onClick={() => navigate("/login")}>
                Sign in
              </Button>
            </>
          )}
        </div>
      </StyledToobar>
    </AppBar>
  );
};

export default Navbar;
