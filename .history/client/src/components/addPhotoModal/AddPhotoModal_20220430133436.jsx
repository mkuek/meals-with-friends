import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import moment from "moment";
import { Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
const AddPhotoModal = ({
  title,
  trainInfo,
  openPhotoModal,
  setOpenModal,
  handleOpenModal,
  handleClosnPhotoModal,
}) => {
  return (
    trainInfo && (
      <>
        <Modal
          open={openPhotoModal.open}
          onClose={handleClosnPhotoModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignSelf: "flex-start",
                justifyContent: "flex-start",
                marginBottom: "auto",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignContent: "center",
                }}
              >
                <Typography variant="h6" component="h2" fontWeight="bold">
                  Volunteer Details
                </Typography>
                <CloseIcon
                  onClick={handleClosnPhotoModal}
                  sx={{ cursor: "pointer" }}
                />
              </Box>
              <Divider style={{ width: "100%", margin: "0" }} />
            </Box>

            <Box
              sx={{
                display: "flex",
                width: "65%",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" component="h2" fontWeight="bold">
                Date
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                test
              </Typography>
            </Box>
          </Box>
        </Modal>
      </>
    )
  );
};

export default AddPhotoModal;
