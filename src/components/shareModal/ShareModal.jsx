import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, Snackbar, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "25%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
};

const ShareModal = ({
  openShareModal,
  setOpenShareModal,
  handleOpenShareModal,
  handleCloseShareModal,
  trainId,
}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(window.location.toString());
  };

  return (
    <>
      <Button variant="contained" size="small" onClick={handleOpenShareModal}>
        Share
      </Button>
      <Modal
        open={openShareModal}
        onClose={handleCloseShareModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignContent: "center",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" component="h2" fontWeight="bold">
                  Sharing Options
                </Typography>
                <CloseIcon
                  onClick={(e) => setOpenShareModal(false)}
                  sx={{ cursor: "pointer" }}
                />
              </Box>
              <Divider style={{ width: "100%", margin: "0" }} />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="subtitle1" component="div" fontWeight="bold">
              Here is the unique link for this Meal Train page
            </Typography>
            <Box sx={{ display: "flex", width: "100%" }}>
              <TextField
                defaultValue={`https://meals-with-friends.netlify.app/${trainId}`}
                fullWidth
              />
              <Button variant="contained" onClick={handleClick}>
                <ContentCopyIcon />
              </Button>
              <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={2000}
                message="Copied to clipboard"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              flexDirection: "column",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Divider
              style={{
                width: "100%",
                marginBottom: "1rem",
                marginTop: "1rem",
              }}
            />
            <Button variant="contained" onClick={handleCloseShareModal}>
              Ok
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ShareModal;
