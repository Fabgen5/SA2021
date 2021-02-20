'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';



// App
const app = express();
app.get('/', (req, res) => {
  var os = require("os");
  var hostname = os.hostname();
  let date_ob = new Date();

  res.send(JSON.stringify('Ciao: ' + hostname +' Data: '+ date_ob));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
