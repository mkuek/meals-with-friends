import React, { useContext } from "react";
import { AppBar, styled, Toolbar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

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
            <>
              <a href="/trains/create">Get Started</a>
              <Button
                variant="contained"
                onClick={() => dispatch({ type: "LOGOUT" })}
              >
                Logout
              </Button>
            </>
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
