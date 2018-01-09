import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import superagent from 'superagent';
import jsonp from 'superagent-jsonp'

export class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCity: 'Loading...',
      currentWeather: 'Loading...',
      currentTemperature: 0,
      tempFahrenheit: 'F',
      tempCelsius: 'C'
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sick weather app</h1>
        </header>
        <ul>
          <li>{this.state.currentCity}</li>
          <li>{this.state.currentWeather}</li>
          <li>{this.state.currentTemperature}{this.state.tempFahrenheit}</li>
        </ul>
      </div>
    );
  }
}

export default WeatherApp;
