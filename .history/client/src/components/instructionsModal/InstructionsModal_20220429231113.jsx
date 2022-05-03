import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "90vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
};

const InstructionsModal = ({
  trainInfo,
  openModal,
  setOpenModal,
  handleOpenModal,
  handleCloseModal,
}) => {
  return (
    trainInfo && (
      <>
        <Modal
          open={openModal.open}
          onClose={handleCloseModal}
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
                    onClick={() => handleCloseModal()}
                    sx={{ cursor: "pointer" }}
                  />
                </Box>
                <Divider style={{ width: "100%", margin: "0" }} />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                width: "65%",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" component="h2" fontWeight="bold">
                Recipient
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {trainInfo.meal_recipient}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                width: "65%",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" component="h2" fontWeight="bold">
                Location
              </Typography>
              <Typography id="modal-modal-description">
                {trainInfo.address}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                width: "65%",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" component="h2" fontWeight="bold">
                Preferred delivery time
              </Typography>
              <Typography id="modal-modal-description">
                {trainInfo.meal_delivery_time}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                width: "65%",
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
                alignItems: "flex-start",
                width: "65%",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" component="h2" fontWeight="bold">
                Special Instructions
              </Typography>
              <Typography id="modal-modal-description">
                {trainInfo.meal_instructions}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                width: "65%",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" component="h2" fontWeight="bold">
                Favorite meals/restaurants
              </Typography>
              <Typography id="modal-modal-description">
                {trainInfo.meal_favorites}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                width: "65%",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" component="h2" fontWeight="bold">
                Least Favorite meals
              </Typography>
              <Typography id="modal-modal-description">
                {trainInfo.meal_non_favorite}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                width: "65%",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" component="h2" fontWeight="bold">
                Allergies or dietary restrictions
              </Typography>
              <Typography id="modal-modal-description">
                {trainInfo.allergy}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "flex-start",
              }}
            >
              <Divider
                style={{
                  width: "100%",
                  marginBottom: "1rem",
                  marginTop: "1rem",
                }}
              />
              <Button variant="outlined" onClick={handleCloseModal}>
                Close
              </Button>
            </Box>
          </Box>
        </Modal>
      </>
    )
  );
};

export default InstructionsModal;
