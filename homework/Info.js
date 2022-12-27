import React, { Component } from "react";
export default class Server extends Component {
const express = require('express');
const app = express();
const inf = [
    [id: 0, name : 'A' , age: 21],
    [id: 1 , name: 'B' , age: 45],
    [id: 2 , name:'C' , age: 67]
];

app.get('/', function (req, res) {
    res.send(inf);
  });
  
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
  } 