import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function BookingForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Name"
          className={classes.textField}
          variant="outlined"
          margin="normal"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          className={classes.textField}
          variant="outlined"
          margin="normal"
        />
        <TextField
          id="outlined-basic"
          label="Phone #"
          className={classes.textField}
          variant="outlined"
          margin="normal"
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          style={{ margin: 8 }}
          multiline
          fullWidth
          margin="normal"
          rows={6}
          variant="outlined"
          />
    </form>
  );
}