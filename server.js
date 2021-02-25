'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

var os = require("os");
var hostname = os.hostname();
let date_ob = new Date();

// App
const app = express();

app.get('/T1/:num', (req, res) => {
  var x = req.params.num ;
  var squared = x*x;
  res.send(JSON.stringify('Received: '+x + ' Squared : '+squared));
});

app.get('/T2', (req, res) => {
  var os = require("os");
  var hostname = os.hostname();
  let date = new Date();
  res.send(JSON.stringify('IP: '+ hostname +' Data: '+ date));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
