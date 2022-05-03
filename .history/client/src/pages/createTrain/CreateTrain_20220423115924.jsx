import React, { useState } from "react";
import Navbar from "../../components/navBar/Navbar";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./createTrain.scss";

const CreateTrain = () => {
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
            <Typography>{children}</Typography>
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
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Navbar />
      <div className="trainForm">
        <div className="title">Start a Meal Train® page</div>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
            >
              <Tab label="1 Enter recipient" {...a11yProps(0)} />
              <Tab label="2 Select dates" {...a11yProps(1)} />
              <Tab label="3 Add preferences" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            This Meal Train page is for:
            <form action="">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Recipient name" />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Recipient email address"
              />
              <label htmlFor="address">Address</label>
              <input type="text" id="address" placeholder="Optional" />
              <label htmlFor="city">City</label>
              <input type="text" id="city" />
              <label htmlFor="state">State</label>
              <input type="text" id="state" />
              <label htmlFor="zip">Postal Code</label>
              <input type="text" id="name" />
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" placeholder="Optional" />
            </form>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Select dates
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Box>
      </div>
    </>
  );
};

export default CreateTrain;
