import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const VolunteerModal = ({
  title,
  meal,
  openModal,
  setOpenModal,
  handleOpenModal,
  handleCloseModal,
}) => {
  return (
    <div>
      <Modal
        open={openModal.open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="title">{meal.title}</div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {meal.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {`${meal.volunteer} ${meal.volunteer}`}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default VolunteerModal;
