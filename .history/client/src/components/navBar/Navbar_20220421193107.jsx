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
  const navigate = useNavigate();

  return (
    <AppBar position="stick">
      <StyledToobar>
        <div>Navbar</div>
        <button onClick={() => navigate("login")}>Login</button>
      </StyledToobar>
    </AppBar>
  );
};

export default Navbar;
