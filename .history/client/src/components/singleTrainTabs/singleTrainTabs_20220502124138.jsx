import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./singleTrainTabs.scss";
import {
  Button,
  FormLabel,
  Grid,
  MenuItem,
  Select,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  modalClasses,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import moment from "moment";
import VolunteerModal from "../volunteerModal/VolunteerModal";
import InstructionsModal from "../instructionsModal/InstructionsModal";
import TrainUpdates from "../../pages/trainUpdates/TrainUpdates";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, height: "15rem" }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const SingleTrainTabs = ({ trainInfo, trainLength, eventList }) => {
  const [parentValue, setParentValue] = useState(0);
  const [innerTabValue, setInnerTabValue] = useState(0);
  const [openEventModal, setOpenEventModal] = useState({
    open: false,
    data: "",
  });
  const [openInstructionsModal, setOpenInstructionsModal] = useState({
    open: false,
    data: "",
  });

  const { trainId, mealId } = useParams();

  const navigate = useNavigate();

  const handleChangeParent = (event, newValue) => {
    setParentValue(newValue);
  };
  const handleChangeInner = (event, newValue) => {
    setInnerTabValue(newValue);
  };
  const { currentUser, dispatch } = useContext(AuthContext);

  const handleOpenEventModal = (data) =>
    setOpenEventModal({ open: true, data: data });
  const handleCloseEventModal = () =>
    setOpenEventModal({ open: false, data: "" });

  const handleOpenInstructionsModal = (data) =>
    setOpenInstructionsModal({ open: true, data: data });
  const handleCloseInstructionsModal = () =>
    setOpenInstructionsModal({ open: false, data: "" });

  const renderList = () => {
    const dates = trainLength;
    const formatted = [];
    dates.map((date) => {
      formatted.push(moment(date).format("MMMM D YYYY, dddd"));
    });

    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {dates.map((date, index) => (
                <TableRow
                  key={`date-${index}`}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {moment(date).format("MMMM D YYYY, dddd")}
                  </TableCell>
                  <TableCell align="right">
                    {trainInfo.individual_meals[index].title === "Available" ? (
                      <>
                        <Grid item xs>
                          <Typography
                            variant="subtitle1"
                            component="div"
                            fontWeight="bold"
                            sx={{ color: "#3c763d" }}
                          >
                            This date is available
                          </Typography>
                        </Grid>
                      </>
                    ) : (
                      <>
                        <Grid item xs>
                          <Typography
                            variant="subtitle1"
                            component="div"
                            fontWeight="bold"
                            sx={{ color: "#F08B1D" }}
                          >
                            {`${trainInfo.individual_meals[index].volunteer.first_name} ${trainInfo.individual_meals[index].volunteer.last_name}`}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            component="div"
                            marginTop="0rem"
                            marginBottom="0"
                          >
                            {trainInfo.individual_meals[index].meal_name}
                          </Typography>
                        </Grid>
                      </>
                    )}
                  </TableCell>
                  <TableCell align="right">
                    {trainInfo.individual_meals[index].title ===
                      "Available" && (
                      <Button
                        variant="contained"
                        fontSize="small"
                        onClick={() =>
                          navigate(`/trains/${trainId}/volunteer/${index}`)
                        }
                        sx={{ backgroundColor: "green" }}
                      >
                        Volunteer for this
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  };

  const handleEventClick = (e) => {
    e.jsEvent.preventDefault();
    if (e.event.title === "Available") {
      navigate(e.event.url);
    } else {
      handleOpenEventModal(e.event);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        padding="0"
      >
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              width: "100%",
            }}
          >
            <Tabs
              value={parentValue}
              onChange={handleChangeParent}
              aria-label="basic tabs example"
              variant="fullWidth"
              centered
            >
              <Tab label="Calendar" />
              <Tab label="Updates" />
              <Tab label="Donations" />
            </Tabs>
          </Box>
          <TabPanel value={parentValue} index={0}>
            <div className="container">
              <Grid container spacing={1} width="100%">
                <Grid item xs={12} paddingTop={0}>
                  <div className="about">
                    {trainInfo.train_description === "" ? (
                      <div className="about-empty">
                        <Typography variant="h6" component="div">
                          Let everyone know why you are organizing this Meal
                          Train page.
                        </Typography>
                        <Button variant="contained" size="small">
                          <EditIcon fontSize="small" />
                          Tell the story
                        </Button>
                      </div>
                    ) : (
                      <div className="about-body">
                        <Typography
                          variant="h5"
                          component="div"
                          fontWeight="bold"
                        >
                          About this Meal Train page
                        </Typography>
                        <Typography variant="body1" component="div">
                          {trainInfo.train_description}
                        </Typography>
                        <Grid
                          sx={{
                            border:
                              "1px solid rgba(189, 189, 189, 0.5647058824)",
                            borderRadius: "5px",
                            boxShadow:
                              "2px 4px 10px 1px rgb(201 201 201 / 47%)",
                            padding: "0.5rem",
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box>
                            <Typography
                              variant="subtitle1"
                              component="div"
                              fontWeight="bold"
                            >
                              Location
                            </Typography>
                            <Typography variant="body1" component="div">
                              {trainInfo.address || "Not Specified"}
                            </Typography>
                          </Box>
                          <Box>
                            <Box>
                              <Typography
                                variant="subtitle1"
                                component="div"
                                fontWeight="bold"
                              >
                                Number of People
                              </Typography>
                              <Typography variant="body1" component="div">
                                {trainInfo.meal_adults &&
                                  `Adults: ${Number(trainInfo.meal_adults)} `}
                                {(trainInfo.meal_kids &&
                                  `Kids:${Number(trainInfo.meal_kids)}`) ||
                                  "Not Specified"}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography
                                variant="subtitle1"
                                component="div"
                                fontWeight="bold"
                              >
                                Preferred delivery time
                              </Typography>
                              <Typography variant="body1" component="div">
                                {trainInfo.meal_delivery_time ||
                                  "Not Specified"}
                              </Typography>
                            </Box>
                          </Box>
                          <Box>
                            <Typography
                              variant="subtitle1"
                              component="div"
                              fontWeight="bold"
                            >
                              Special Instructions
                            </Typography>
                            <Typography variant="body1" component="div">
                              {trainInfo.meal_instructions || "Not Specified"}
                            </Typography>
                            <Button
                              variant="text"
                              size="small"
                              sx={{
                                display: "flex",
                                width: "100%",
                                gap: "0.25rem",
                                justifyContent: "flex-end",
                              }}
                              onClick={() => {
                                openInstructionsModal.open == false &&
                                openInstructionsModal.data == ""
                                  ? handleOpenInstructionsModal(trainInfo)
                                  : handleCloseInstructionsModal();
                              }}
                            >
                              read more
                              <InstructionsModal
                                openInstructionsModal={openInstructionsModal}
                                trainInfo={openInstructionsModal.data}
                                setOpenInstructionsModal={
                                  setOpenInstructionsModal
                                }
                                handleCloseInstructionsModal={
                                  handleCloseInstructionsModal
                                }
                              />
                            </Button>
                          </Box>
                        </Grid>
                      </div>
                    )}
                    <div>
                      <Box sx={{ flexGrow: 1, padding: "0" }}>
                        <Grid
                          container
                          spacing={{ xs: 2, md: 3 }}
                          columns={{ xs: 12, sm: 8, md: 12 }}
                          alignItems="flex-start"
                          sx={{
                            padding: "0",
                          }}
                        >
                          <Box
                            sx={{
                              width: "100%",
                              padding: "0",
                            }}
                          >
                            <Grid
                              container
                              justifyContent="flex-end"
                              alignItems="center"
                              marginTop="2rem"
                              borderRadius="5px"
                              sx={{ backgroundColor: "#f5f5f5", padding: "0" }}
                            >
                              <Grid item xs={5}>
                                <Box
                                  sx={{
                                    borderBottom: 1,
                                    borderColor: "divider",
                                    width: "100%",
                                  }}
                                >
                                  <Tabs
                                    value={innerTabValue}
                                    onChange={handleChangeInner}
                                    aria-label="basic tabs example"
                                    variant="fullWidth"
                                    centered
                                  >
                                    <Tab label="List View" />
                                    <Tab label="Calendar View" />
                                  </Tabs>
                                </Box>
                              </Grid>
                              <Grid
                                item
                                xs
                                textAlign="right"
                                marginRight="1rem"
                              >
                                <Button
                                  variant="contained"
                                  size="small"
                                  sx={{
                                    gap: "0.25rem",
                                    backgroundColor: "#ffd400",
                                    color: "#333",
                                    "&:hover": { backgroundColor: "#ae9101" },
                                  }}
                                  onClick={() => {
                                    openInstructionsModal.open == false
                                      ? handleOpenInstructionsModal(trainInfo)
                                      : handleCloseInstructionsModal();
                                  }}
                                >
                                  <InfoIcon fontSize="small" />
                                  Review all instructions
                                  <InstructionsModal
                                    openInstructionsModal={
                                      openInstructionsModal
                                    }
                                    trainInfo={openInstructionsModal.data}
                                    setOpenInstructionsModal={
                                      setOpenInstructionsModal
                                    }
                                    handleCloseInstructionsModal={
                                      handleCloseInstructionsModal
                                    }
                                  />
                                </Button>
                              </Grid>
                            </Grid>
                            <TabPanel value={innerTabValue} index={0}>
                              <div className="listview">
                                {renderList() || "No Events"}
                              </div>
                            </TabPanel>
                            <TabPanel
                              value={innerTabValue}
                              index={1}
                              sx={{ width: "100%" }}
                            >
                              <div className="calendar">
                                <Grid
                                  container
                                  className="calendar"
                                  width="100%"
                                  height="100%"
                                >
                                  <FullCalendar
                                    plugins={[dayGridPlugin]}
                                    initialView="dayGridMonth"
                                    events={eventList}
                                    eventClick={handleEventClick}
                                  />
                                </Grid>
                                <div className="modals">
                                  <VolunteerModal
                                    openEventModal={openEventModal}
                                    meal={openEventModal.data}
                                    handleCloseEventModal={
                                      handleCloseEventModal
                                    }
                                  />
                                </div>
                              </div>
                            </TabPanel>
                          </Box>
                        </Grid>
                      </Box>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </TabPanel>
          <TabPanel value={parentValue} index={1} sx={{ height: "100%" }}>
            <Grid
              container
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div className="about">
                <Grid
                  item
                  xs
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#c9c9c9",
                    border: "1px solid rgba(189, 189, 189, 0.5647058824)",
                    borderRadius: "5px",
                    height: "100%",
                    marginBottom: "2rem",
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={() => navigate(`/trains/${trainId}/updates/new`)}
                    sx={{
                      backgroundColor: "#5cb85c",
                      gap: "0.25rem",
                      alignItems: "center",
                    }}
                  >
                    <EditIcon fontSize="small" />
                    Post an update
                  </Button>
                </Grid>
                <Grid
                  item
                  xs
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "8",
                    border: "1px solid rgba(189, 189, 189, 0.5647058824)",
                    borderRadius: "5px",
                  }}
                >
                  {trainInfo &&
                    trainInfo.updates.map((update, index) => {
                      <Typography variant="body1" component="div">
                        {"Not Specified"}
                      </Typography>;
                    })}
                </Grid>
              </div>
            </Grid>
          </TabPanel>
          <TabPanel value={parentValue} index={2}>
            <form action="">
              <Grid container spacing={1}>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12} sm={6} md={6}></Grid>
                <Grid item xs={12} sm={6} md={6}></Grid>
                <Grid item xs={12} sm={6} md={6}></Grid>
                <Grid item xs={12} sm={6} md={6}></Grid>
              </Grid>
              <Grid container justify="flex-end" className="nextButton"></Grid>
            </form>
          </TabPanel>
        </Box>
      </Grid>
    </Box>
  );
};

export default SingleTrainTabs;
