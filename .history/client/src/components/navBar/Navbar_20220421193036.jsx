import React from "react";
import { AppBar, styled, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyledToobar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#fff",
  color: "black",
});

const Navbar = () => {
  return (
    <AppBar position="stick">
      <StyledToobar>
        <div>Navbar</div>
        <div onClick={() => navigate("login")}>Login</div>
      </StyledToobar>
    </AppBar>
  );
};

export default Navbar;
