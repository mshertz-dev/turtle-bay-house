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
      <Grid item xs={4}>
          <Paper className={classes.paper} id='headerCard'>Bedrooms and Bathrooms</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='headerCard'>Appliances/Kitchen</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='headerCard'>Safety/Misc</Paper>
        </Grid>
        {/* new row 2*/}
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Sleeps: 8</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Washer</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Smoke Detectors</Paper>
        </Grid>
        {/* new row 3*/}
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Bedrooms: 4</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Dryer</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Fire Extinguisher (Kitchen)</Paper>
        </Grid>
        {/* new row 4*/}
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Full Baths: 3</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Microwave</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Parking: 5 Cars</Paper>
        </Grid>
        {/* new row 5*/}
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Powder Rooms: 1</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Oven</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Garage</Paper>
        </Grid>
        {/* new row 6*/}
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Master: King</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Grill</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Dock/Water Access: No</Paper>
        </Grid>
          {/* new row 7*/}
          <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Bedroom 2: Queen</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>TVs: 4</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123' style={{'box-shadow': '0px 0px 0px 0px'}}></Paper>
        </Grid>
          {/* new row 7*/}
          <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Bedroom 3: Queen</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Cable</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123' style={{'box-shadow': '0px 0px 0px 0px'}}></Paper>
        </Grid>
          {/* new row 7*/}
          <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Bedroom 4: Double</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>WIFI</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123' style={{'box-shadow': '0px 0px 0px 0px'}}></Paper>
        </Grid>
          {/* new row 7*/}
          <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Linens: No</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Roku Streaming</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123' style={{'box-shadow': '0px 0px 0px 0px'}}></Paper>
        </Grid>
          {/* new row 7*/}
          <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Toiletries: No</Paper>
        </Grid>
      </Grid>
    </div>
  );
}