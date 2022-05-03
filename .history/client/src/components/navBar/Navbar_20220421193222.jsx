import React from "react";
import { AppBar, styled, Toolbar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyledToobar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#fff",
  color: "black",
});

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="stick">
      <StyledToobar>
        <img src="https://www.mealtrain.com/content/img/mealtrain_primary_logo.png?v=1">
          Navbar
        </img>
        <Button variant="outlined" onClick={() => navigate("login")}>
          Login
        </Button>
      </StyledToobar>
    </AppBar>
  );
};

export default Navbar;
