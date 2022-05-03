import React from "react";
import { AppBar, styled, Toolbar } from "@mui/material";

const StyledToobar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#fff",
});

const Navbar = () => {
  return (
    <AppBar position="stick">
      <StyledToobar>
        <div>Navbar</div>
        <div>Navbar</div>
      </StyledToobar>
    </AppBar>
  );
};

export default Navbar;
