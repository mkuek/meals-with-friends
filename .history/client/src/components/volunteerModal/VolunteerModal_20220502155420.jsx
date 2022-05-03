import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import moment from "moment";
import { Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useParams } from "react-router-dom";

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
  openEventModal,
  setOpenModal,
  handleOpenModal,
  handleCloseEventModal,
}) => {
  const navigate = useNavigate();
  const trainId = useParams();
  return (
    meal && (
      <>
        <Modal
          open={openEventModal.open}
          onClose={handleCloseEventModal}
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
                  onClick={handleCloseEventModal}
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
                {moment(meal._instance.range.start).format("dddd MMM DD YYYY")}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
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
            <Box
              sx={{
                display: "flex",
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
              <Button variant="outlined" onClick={handleCloseEventModal}>
                Close
              </Button>
              <Button
                variant="outlined"
                onClick={() => navigate(`${meal._def.url}/edit`)}
              >
                Edit
              </Button>
            </Box>
          </Box>
        </Modal>
      </>
    )
  );
};

export default VolunteerModal;
