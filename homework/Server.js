import React, { Component } from "react";
export default class Server extends Component {
const express = require('express');
const app = express();
app.get('/', function (req, res) {
    res.send('My name is Elvina');
  });

  app.get('/card', function (req, res) {
    res.send('Этот роут отвечает за карты');
  });
  app.get('/client', function (req, res) {
    res.send('Этот роут отвечает за клиентов');
  });
  
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
  } 