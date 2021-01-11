import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
  const initialInputState = { nameToSubmit: "", email: "", phone: "", message: "" };
  const [eachEntry, setEachEntry] = useState(initialInputState);
  const {nameToSubmit, email, phone, message} = eachEntry;
  const handleInputChange = e => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };
  const handleFinalSubmit = e => {
    console.log(eachEntry);
    alert("Thanks for reaching out!  We'll be in contact with you shortly");
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Name"
          className={classes.textField}
          variant="outlined"
          margin="normal"
          name="nameToSubmit"
          onChange={handleInputChange}
          value={nameToSubmit}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          className={classes.textField}
          variant="outlined"
          margin="normal"
          name="email"
          onChange={handleInputChange}
          value={email}
        />
        <TextField
          id="outlined-basic"
          label="Phone #"
          className={classes.textField}
          variant="outlined"
          margin="normal"
          name="phone"
          onChange={handleInputChange}
          value={phone}
        />
        <TextField
          id="outlined-multiline-static"
          label="Message"
          style={{ margin: 8 }}
          multiline
          fullWidth
          margin="normal"
          rows={6}
          variant="outlined"
          name="message"
          onChange={handleInputChange}
          value={message}
          />
        <Button
          variant="contained" color="primary" onClick={handleFinalSubmit}>
          Submit Info
        </Button>
    </form>
  );
}