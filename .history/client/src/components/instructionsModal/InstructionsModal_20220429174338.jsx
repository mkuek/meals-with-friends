import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import moment from "moment";
import { Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const InstructionsModal = ({
  title,
  meal,
  openModal,
  setOpenModal,
  handleOpenModal,
  handleCloseModal,
}) => {
  return (
    meal && (
      <>
        <Button
          onClick={openModal.open}
          variant="contained"
          size="small"
          sx={{ gap: "0.25rem" }}
        >
          <InfoIcon fontSize="small" />
          Review all instructions
        </Button>
      </>
    )
  );
};

export default InstructionsModal;
