import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import moment from "moment";

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
      <div>
        <Modal
          open={openModal.open}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {moment(meal._instance.range.start).format("dddd MMM DD YYYY")}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {meal._def.extendedProps.meal_name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {meal._def.extendedProps.volunteer}
            </Typography>
          </Box>
        </Modal>
      </div>
    )
  );
};

export default VolunteerModal;
