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
                alignItems: "flex-start",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" component="h2" fontWeight="bold">
                Recipient
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {trainInfo.meal_recipient || "Not Available"}
              </Typography>
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
              <Typography variant="h6" component="h2" fontWeight="bold">
                Location
              </Typography>
              <Typography id="modal-modal-description">
                {trainInfo.address || "Not Available"}
              </Typography>
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
              <Typography variant="h6" component="h2" fontWeight="bold">
                Preferred delivery time
              </Typography>
              <Typography id="modal-modal-description">
                {trainInfo.meal_delivery_time || "Not Available"}
              </Typography>
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
              <Typography variant="h6" component="h2" fontWeight="bold">
                Number of People
              </Typography>
              <Typography id="modal-modal-description">
                {trainInfo.meal_adults &&
                  `Adults: ${Number(trainInfo.meal_adults)} `}
                {trainInfo.meal_kids && `Kids:${Number(trainInfo.meal_kids)}`}
              </Typography>
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
              <Typography variant="h6" component="h2" fontWeight="bold">
                Special Photo
              </Typography>
              <Typography id="modal-modal-description">
                {trainInfo.meal_Photo || "Not Available"}
              </Typography>
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
              <Typography variant="h6" component="h2" fontWeight="bold">
                Favorite meals/restaurants
              </Typography>
              <Typography id="modal-modal-description">
                {trainInfo.meal_favorites || "Not Available"}
              </Typography>
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
              <Typography variant="h6" component="h2" fontWeight="bold">
                Least Favorite meals
              </Typography>
              <Typography id="modal-modal-description">
                {trainInfo.meal_non_favorite || "Not Available"}
              </Typography>
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
              <Typography variant="h6" component="h2" fontWeight="bold">
                Allergies or dietary restrictions
              </Typography>
              <Typography id="modal-modal-description">
                {trainInfo.allergy || "Not Available"}
              </Typography>
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
              <Button variant="contained" onClick={handleClosePhotoModal}>
                Ok
              </Button>
            </Box>
          </Box>
        </Modal>
      </>
    )
  );
};

export default AddPhotoModal;
