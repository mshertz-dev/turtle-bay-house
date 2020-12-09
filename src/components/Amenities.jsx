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
      <h3>This is where our amenities information will go</h3>
      <Grid container spacing={3}>
      {/* new row */}
      <Grid item xs={4}>
          <Paper className={classes.paper} id='headerCard'>Bedrooms and Bathrooms</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='headerCard'>Appliances/Kitchen</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='headerCard'>Safety/Misc</Paper>
        </Grid>
        {/* new row */}
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Sleeps: 8</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Washer/Dryer: Yes</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Smoke Detectors: Yes</Paper>
        </Grid>
        {/* new row */}
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Bedrooms: 4</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Washer/Dryer: Yes</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Oven: Yes</Paper>
        </Grid>
        {/* new row */}
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Full Baths: 3</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Microwave: Yes</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Oven: Yes</Paper>
        </Grid>
        {/* new row */}
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Powder Rooms: 1</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Grill: Yes</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} id='testing123'>Oven: Yes</Paper>
        </Grid>
      </Grid>
    </div>
  );
}