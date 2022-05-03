import React, { useEffect, useState } from "react";
import { Divider, Modal, Typography, Button, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { db, storage } from "../../firebase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "50%",
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
  handleOpenPhotoModal,
  handleClosePhotoModal,
}) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});

  const handleImage = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    const uploadFile = () => {
      const storage = getStorage();
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, data: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  return (
    <>
      <Button
        variant="contained"
        size="small"
        onClick={() => {
          handleOpenPhotoModal(trainInfo);
        }}
      >
        <AddIcon fontSize="small" />
        Add Photo
      </Button>
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
                <Typography variant="h6" component="h2">
                  Add a Photo
                </Typography>
                <CloseIcon
                  onClick={handleClosePhotoModal}
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
              marginTop: "1rem",
              alignItems: "center",
              width: "100%",
              height: "100%",
              justifyContent: "space-between",
              gap: "1rem",
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
              }}
            >
              <InsertPhotoOutlinedIcon />
            </Box>
            <form action="">
              <input
                style={{ display: "none" }}
                type="file"
                id="imageUploadInput"
                onChange={handleImage}
              />
              <label htmlFor="imageUploadInput">
                <Button
                  component="span"
                  variant="contained"
                  sx={{
                    color: "#FFF",
                    backgroundColor: "#5cb85c",
                    "&:hover": { backgroundColor: "#4e9c4e" },
                  }}
                  onClick={(e) => {
                    console.log("clicked");
                  }}
                >
                  <AddIcon sx={{ color: "white" }} /> Select new photo...
                </Button>
              </label>
            </form>
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
  );
};

export default AddPhotoModal;
