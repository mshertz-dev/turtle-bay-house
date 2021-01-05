import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Booking() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3 id="about-details">Our booking module is in the works and will be here soon, but in the meantime, you have a couple of options for booking your stay at the Turtle Bay House in Sea Isle.  Links to our AirBNB and VRBO listings are below.  Feel free to also contact us directly at chrissyandmichaelshertz@gmail.com or to inquire about booking or simply fill out the form below and we'll respond shortly!</h3>
      <div id="booking-option-1">
        <div id="booking-option-header">Option 1: airbnb & VRBO</div>
        <br></br>
        <div id="booking-option-airbnb"><a href="https://www.airbnb.com/rooms/29828310?s=67&unique_share_id=df4c94b0-f5ea-458c-b09c-4b0f143af170">airbnb Listing</a></div>
        <br></br>
        <div id="booking-option-vrbo"><a href="https://www.vrbo.com/1875369?adultsCount=1&unitId=2437880">VRBO Listing</a></div>
      </div>
    </div>
  );
}

export default Booking;
