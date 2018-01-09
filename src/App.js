import React, { Component } from 'react';
import xhr from 'xhr';
import './App.css';

export class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      currentCity: 'Loading...',
      currentWeather: 'Loading...',
      currentTemperature: 0,
      tempFahrenheit: 'F',
      tempCelsius: 'C'
    }
  }

componentDidMount() {
  const coords = {};

  if (window.navigator.geolocation) { // if geolocation is supported
    navigator.geolocation.getCurrentPosition(
      (success) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      (error) => {
        this.setState({
          error: error.message,
        });
      }
    );
  } else {
    // IP Fallback
  }
}

  render() {
    return (
        <div>
          <h1>{this.state.latitude}</h1>
          <h1>{this.state.longitude}</h1>
          <h1>{this.state.currentCity}</h1>
          <h1>{this.state.currentWeather}</h1>
          <h1>{this.state.currentTemperature}{this.state.tempFahrenheit}</h1>
        </div>
    );
  }
}

export default WeatherApp;
