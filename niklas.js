
const ngrok = "/";

const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('hello');
});

let server = app.listen(process.env.PORT || 4567, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Server listening at http://%s:%s", host, port);
  console.log("");
});
