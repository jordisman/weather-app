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

// const API_KEY = require('../config.js');

// app.get('/', function (req, res) {
//   res.render('index', { weather: null, error: null });
// })

// app.post('/', function (req, res) {
//   let city = req.body.city;
//   let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`;

//   request(url, function (err, response, body) {
//     if (err) {
//       res.render('index', { weather: null, error: 'Error, please try again' });
//     } else {
//       let weather = JSON.parse(body)
//       if (weather.main == undefined) {
//         res.render('index', { weather: null, error: 'Error, please try again' });
//       } else {
//         let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
//         res.render('index', { weather: weatherText, error: null });
//       }
//     }
//   });
// })


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});