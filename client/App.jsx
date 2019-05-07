import React from 'react';
import axios from 'axios';
import Titles from './components/Titles.jsx';
import Form from './components/Form.jsx';
import Weather from './components/Weather.jsx';
import config from '../config.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      city: '',
      country: '',
      humidity: '',
      description: '',
      wind: '',
      sunrise: '',
      sunset: '',
      error: ''
    }
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(e) {
    e.preventDefault();
    const city = e.target.city.value;
    const country = e.target.country.value;

    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${config.API_KEY}&units=imperial`)
    .then(res => {
      console.log('res.data', res.data);
      this.setState({
        temperature: res.data.main.temp,
        tempMax: res.data.main.temp_max,
        tempMin: res.data.main.temp_min,
        pressure: res.data.main.pressure,
        city: res.data.name,
        country: res.data.sys.country,
        humidity: res.data.main.humidity,
        description: res.data.weather[0].description,
        wind: res.data.wind.speed,
        error: ''
      });
    })
    .catch(err => {
      console.log('err', err);
      this.setState({
        error: 'Please input values'
      })
    })
  }

  render() {
    return (
      <div className="container">
          <div className="title-container">
            <Titles />
          </div>
          <div className="form-container">
            <Form getWeather={this.getWeather} />
            <Weather
              temperature={this.state.temperature}
              tempMax={this.state.tempMax}
              tempMin={this.state.tempMin}
              pressure={this.state.pressure}
              humidity={this.state.humidity}
              city={this.state.city}
              country={this.state.country}
              description={this.state.description}
              wind={this.state.wind}
              error={this.state.error}
            />
        </div>
      </div>
    )
  }
}
export default App;