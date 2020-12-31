import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

export default function Amenities() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3>Hello and welcome to Turtle Bay House, located on the bay end of 81st Street.  You're just 3 blocks from the beach while being able to enjoy an incredibly breathtaking unobstructed view of the bay.  The sunsets are to die for!  The house is walking distance to many amenities including marinas, dining, nightlife, and convenience stores.</h3>
      <h3>While staying at Turtle Bay House, we simply ask that you treat the home as your own and that you enjoy yourselves and relax as much as possible.  Please see below for the various amenities included as well as some exclusions.  Please feel free to contact us if you'd like any clarification.</h3>
      <h3>*COVID-19 UPDATE*: Due to the ongoing pandemic, we are unfortunately not permitted to provide linens including comforters.  When we are given further direction by local and state governments, we will update our policy but until then, please bring all linens and if traveling from afar, we suggest a linen rental company.  There are a few who service Sea Isle City but if you'd like a specific recommendation, please let us know.</h3>
      <Grid container spacing={3}>
      {/* new row 1*/}
      <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='header-card'>Bedrooms / Bathrooms</Paper>
        </Grid>
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='header-card'>Appliances / Kitchen</Paper>
        </Grid>
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='header-card'>Safety / Misc</Paper>
        </Grid>
        {/* new row 2*/}
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card'>Sleeps: 8</Paper>
        </Grid>
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card'>Washer</Paper>
        </Grid>
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card'>Smoke Detectors</Paper>
        </Grid>
        {/* new row 3*/}
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card'>Bedrooms: 4</Paper>
        </Grid>
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card'>Dryer</Paper>
        </Grid>
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card'>Fire Extinguisher (Kitchen)</Paper>
        </Grid>
        {/* new row 4*/}
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card'>Full Baths: 3</Paper>
        </Grid>
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card'>Microwave</Paper>
        </Grid>
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card'>Parking: 5 Cars</Paper>
        </Grid>
        {/* new row 5*/}
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card'>Powder Rooms: 1</Paper>
        </Grid>
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card'>Oven</Paper>
        </Grid>
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card'>Garage</Paper>
        </Grid>
        {/* new row 6*/}
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card'>Master: King</Paper>
        </Grid>
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card'>Grill</Paper>
        </Grid>
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card'>Dock/Water Access: No</Paper>
        </Grid>
          {/* new row 7*/}
          <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card'>Bedroom 2: Queen</Paper>
        </Grid>
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card'>TVs: 4</Paper>
        </Grid>
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card' style={{'box-shadow': '0px 0px 0px 0px'}}></Paper>
        </Grid>
          {/* new row 7*/}
          <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card'>Bedroom 3: Queen</Paper>
        </Grid>
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card'>Cable</Paper>
        </Grid>
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card' style={{'box-shadow': '0px 0px 0px 0px'}}></Paper>
        </Grid>
          {/* new row 7*/}
          <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card'>Bedroom 4: Double</Paper>
        </Grid>
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card'>WIFI</Paper>
        </Grid>
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card' style={{'box-shadow': '0px 0px 0px 0px'}}></Paper>
        </Grid>
          {/* new row 7*/}
          <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card'>Linens: No</Paper>
        </Grid>
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card'>Roku Streaming</Paper>
        </Grid>
        <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card' style={{'box-shadow': '0px 0px 0px 0px'}}></Paper>
        </Grid>
          {/* new row 7*/}
          <Grid item xs={4} id='amenities-container'>
          <Paper className={classes.paper} id='amenities-card'>Toiletries: No</Paper>
        </Grid>
      </Grid>
    </div>
  );
}