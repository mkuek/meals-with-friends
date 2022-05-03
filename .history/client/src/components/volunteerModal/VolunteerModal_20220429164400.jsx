import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import moment from "moment";
import { Divider } from "@mui/material";

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

const VolunteerModal = ({
  title,
  meal,
  openModal,
  setOpenModal,
  handleOpenModal,
  handleCloseModal,
}) => {
  console.log(meal);
  return (
    meal && (
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
                gap: "3rem",
                width: "100%",
                alignSelf: "flex-start",
                justifyContent: "flex-start",
                marginBottom: "auto",
              }}
            >
              <Typography variant="h6" component="h2" fontWeight="bold">
                Volunteer Details
              </Typography>{" "}
              <Divider style={{ width: "100%" }} />
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "3rem",
                width: "65%",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" component="h2" fontWeight="bold">
                Date
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {moment(meal._instance.range.start).format("dddd MMM DD YYYY")}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "3rem",
                alignItems: "center",
                width: "65%",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" component="h2" fontWeight="bold">
                Volunteer
              </Typography>
              <Typography id="modal-modal-description">
                {meal._def.extendedProps.volunteer}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "3rem",
                alignItems: "center",
                width: "65%",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" component="h2" fontWeight="bold">
                Description
              </Typography>
              <Typography id="modal-modal-description">
                {meal._def.extendedProps.meal_name}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "3rem",
                alignItems: "center",
                width: "65%",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" component="h2" fontWeight="bold">
                Notes
              </Typography>
              <Typography id="modal-modal-description">
                {meal._def.extendedProps.notes}
              </Typography>
            </Box>
          </Box>
        </Modal>
      </>
    )
  );
};

export default VolunteerModal;
