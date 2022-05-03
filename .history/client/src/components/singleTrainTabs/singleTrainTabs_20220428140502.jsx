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
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import moment from "moment";

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
        <Box sx={{ p: 3 }}>
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

const SingleTrainTabs = ({ trainInfo }) => {
  const [parentValue, setParentValue] = useState(0);
  const [innerTabValue, setInnerTabValue] = useState(0);
  const [eventList, setEventList] = useState([]);
  const { trainId, mealId } = useParams();

  const handleChangeParent = (event, newValue) => {
    setParentValue(newValue);
  };
  const handleChangeInner = (event, newValue) => {
    setInnerTabValue(newValue);
  };
  const { currentUser, dispatch } = useContext(AuthContext);

  console.log(trainInfo.train_description);

  const trainLength = () => {
    const dates = [];
    const startDate = moment(
      `${trainInfo.meal_date_start[0].year}-${
        trainInfo.meal_date_start[0].month
      }-${trainInfo.meal_date_start[0].day - 1}`,
      "YYYY-M-D"
    );
    const endDate = moment(
      `${trainInfo.meal_date_end[0].year}-${trainInfo.meal_date_end[0].month}-${
        trainInfo.meal_date_end[0].day + 1
      }`,
      "YYYY-M-D"
    );
    while (startDate.add(1, "days").diff(endDate) < 0) {
      dates.push(startDate.clone().toDate());
    }
    return dates;
  };
  const renderList = () => {
    const dates = trainLength();
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
                  <TableCell align="right">available</TableCell>
                  <TableCell align="right">available button</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  };

  const createEvents = async () => {
    const dates = trainLength();
    const eventListObject = [];
    dates.map((date) => {
      eventListObject.push({
        title: "available",
        date: moment(date).format("MMMM D YYYY, dddd"),
        url: `/trains/${trainId}/volunteer/${mealId}`,
      });
    });
    try {
      if (trainInfo.individual_meals === "") {
        const res = await setDoc(
          doc(db, "train_info", trainId),
          {
            individual_meals: eventListObject,
          },
          { merge: true }
        );
      }
    } catch (error) {
      console.log(error.message);
    }
    setEventList(eventListObject);
    return eventListObject;
  };
  useEffect(() => {
    createEvents();
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        padding="0"
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
                        <Box sx={{ flexGrow: 1 }}>
                          <Grid
                            container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 12, sm: 8, md: 12 }}
                            alignItems="flex-start"
                          >
                            <Box
                              sx={{
                                width: "100%",
                              }}
                            >
                              <Grid
                                container
                                justifyContent="flex-end"
                                alignItems="center"
                                marginTop="2rem"
                                borderRadius="5px"
                                sx={{ backgroundColor: "#f5f5f5" }}
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
                                    sx={{ gap: "0.25rem" }}
                                  >
                                    <InfoIcon fontSize="small" />
                                    Review all instructions
                                  </Button>
                                </Grid>
                              </Grid>
                              <TabPanel value={innerTabValue} index={0}>
                                <div className="listview">
                                  {trainInfo.meal_date_start
                                    ? renderList()
                                    : "No Events"}
                                </div>
                              </TabPanel>
                              <TabPanel
                                value={innerTabValue}
                                index={1}
                                sx={{ width: "100%" }}
                              >
                                <div className="calendar">
                                  Click all the days when meals can be delivered
                                  <Grid
                                    container
                                    className="calendar"
                                    width="100%"
                                    height="100%"
                                  >
                                    <FullCalendar
                                      plugins={[dayGridPlugin]}
                                      initialView="dayGridMonth"
                                      events={[eventList]}
                                    />
                                  </Grid>
                                </div>
                              </TabPanel>
                            </Box>
                          </Grid>
                        </Box>
                      </div>
                    )}
                  </div>
                </Grid>
              </Grid>
            </div>
          </TabPanel>
          <TabPanel value={parentValue} index={1}>
            empty
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
