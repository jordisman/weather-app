const bodyParser = require('body-parser');
const express = require('express');
const request = require('request');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../dist')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));



app.listen(port, () => {
  console.log(`listening on port ${port}`);
});