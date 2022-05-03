import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";

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
  justifyContent: "space-between",
  alignItems: "center",
};
const AddPhotoModal = ({
  title,
  trainInfo,
  openPhotoModal,
  setOpenModal,
  handleOpenModal,
  handleClosePhotoModal,
}) => {
  return (
    trainInfo && (
      <>
        <Modal
          open={openPhotoModal.open}
          onClose={handleClosePhotoModal}
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
                    Meal Train Information
                  </Typography>
                  <CloseIcon
                    onClick={() => handleClosePhotoModal()}
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
                alignItems: "center",
                width: "100%",
                height: "100%",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "80%",
                  height: "100%",
                  borderRadius: "5px",
                  backgroundColor: "#C9C9C9",
                  margin: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <InsertPhotoOutlinedIcon />
                <Button
                  variant="contained"
                  sx={{ color: "#FFF", backgroundColor: "#5cb85c" }}
                >
                  <AddIcon sx={{ color: "white" }} /> Select new photo...
                </Button>
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
              <Button variant="outlined" onClick={handleClosePhotoModal}>
                Done
              </Button>
            </Box>
          </Box>
        </Modal>
      </>
    )
  );
};

export default AddPhotoModal;
