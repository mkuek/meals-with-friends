import React, { useState } from "react";
import Navbar from "../../components/navBar/Navbar";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./createTrain.scss";
import {
  Button,
  FormLabel,
  Grid,
  Paper,
  styled,
  TextField,
} from "@mui/material";

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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Navbar />
      <div className="trainForm">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
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
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <TextField
                        variant="standard"
                        type="text"
                        id="name"
                        placeholder="Recipient name"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <TextField
                        variant="standard"
                        type="text"
                        id="email"
                        placeholder="Recipient email address"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel htmlFor="address">Address</FormLabel>
                      <TextField
                        variant="standard"
                        type="text"
                        id="address"
                        placeholder="Optional"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <FormLabel htmlFor="city">City</FormLabel>
                      <TextField
                        variant="standard"
                        type="text"
                        id="city"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <FormLabel htmlFor="state">State</FormLabel>
                      <TextField
                        variant="standard"
                        type="text"
                        id="state"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <FormLabel htmlFor="zip">Postal Code</FormLabel>
                  <TextField variant="standard" type="text" id="name" />
                  <FormLabel htmlFor="phone">Phone</FormLabel>
                  <TextField
                    variant="standard"
                    type="text"
                    id="phone"
                    placeholder="Optional"
                  />
                  <Button variant="contained"> Next Step</Button>
                </form>
              </TabPanel>
              <TabPanel value={value} index={1}>
                Select dates
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
            </Box>
          </Grid>
        </Box>
        <div className="title">Start a Meal Train® page</div>
      </div>
    </>
  );
};

export default CreateTrain;
