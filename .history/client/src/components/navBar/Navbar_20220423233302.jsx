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
        <div>
          {currentUser ? (
            <div className="right">
              <Button onClick={() => navigate("/trains/create")} variant="text">
                Get Started
              </Button>
              <Button
                variant="contained"
                onClick={() => dispatch({ type: "LOGOUT" })}
              >
                Logout
              </Button>
            </div>
          ) : (
            <>
              <Button variant="outlined" onClick={() => navigate("/register")}>
                Sign Up
              </Button>
              <Button variant="outlined" onClick={() => navigate("/login")}>
                Login
              </Button>
            </>
          )}
        </div>
      </StyledToobar>
    </AppBar>
  );
};

export default Navbar;