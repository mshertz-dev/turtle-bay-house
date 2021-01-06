const express = require('express');
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(express.static((__dirname + '/../build')));

//test api
app.get('/api/hi', (req, res) => {
  res.send('hiyee');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;