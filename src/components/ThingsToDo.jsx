import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function ThingsToDo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3>Restaurants</h3>
      <Grid container spacing={1}>
      <Grid item xs={12}>
          <Paper className={classes.paper} id='things-to-do-box'>
            <h4 id='activity-header'>O'Donnell's Pour House</h4>
            <div id='things-to-do-details'>
              <div id='activity-pic'>
                <img src="http://odonnellspourhouse.com/assets/images/galleries/full/hsCom.jpg" alt="odonnells" id='activity-pic'></img>
              </div>
              <div id='things-to-do-description'>
                <p>Upbeat Irish pub offering American fare, including steaks & seafood, plus frequent live music.</p>
              </div>
              <div id='things-to-do-info'>
                <p>Phone: 609.263.5600 <br></br> Address: 3907 Landis Ave <br></br>Website: <a href="http://odonnellspourhouse.com/">odonnellspourhouse.com</a></p>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ThingsToDo;
