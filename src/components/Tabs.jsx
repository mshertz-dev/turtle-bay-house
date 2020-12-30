import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import '../App.css';
import Amenities from './Amenities.jsx';
import DemoCarousel from './Carousel.jsx';
import ThingsToDo from './ThingsToDo.jsx';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} id="tabs-bar-container">
      <AppBar position="static" color="default" id="tabs-bar">
        <Tabs
          id="tabs"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="About/Amenities" {...a11yProps(0)} id='testing123'/>
          <Tab label="Photos" {...a11yProps(1)} id='testing123'/>
          <Tab label="Things To Do" {...a11yProps(2)} id='testing123'/>
          <Tab label="Contact Us" {...a11yProps(3)} id='testing123'/>
          <Tab label="Once You've Booked" {...a11yProps(4)} id='testing123'/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Amenities></Amenities>
      </TabPanel>
      <TabPanel value={value} index={1} >
        <DemoCarousel></DemoCarousel>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div id='testing123'>
          <ThingsToDo></ThingsToDo>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div id='testing123'>
          <p id='testing123'>Contact Us form goes here</p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div id='testing123'>
          <p id='testing123'>Keep an eye out for a Welcome Letter along with further instructions!</p>
        </div>
      </TabPanel>
    </div>
  );
}