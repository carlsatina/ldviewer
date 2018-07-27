// app.js for device-description-viewer
// 2018.07.24
// access http://localhost:3000/index.html

'use strict';
const express = require('express');
const app = express();
// const fs = require('fs');

app.use(express.static('./website'));
app.listen(3000, ()=> {
  console.log('access localhost:3000');
});