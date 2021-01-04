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
      <h3 id="about-details">Our booking module is in the works and will be here soon, but in the meantime, you have a couple of options for booking your stay at the Turtle Bay House in Sea Isle.</h3>
      <br></br>
      <h4 id="about-details">Option 1: AirBnB & VRBO</h4>
      <br></br>
      <h4 id="about-details">AirBnB: </h4>
    </div>
  );
}

export default Booking;
