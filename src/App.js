import React, { Component } from 'react';
import xhr from 'xhr';
import './App.css';

export class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      data: {},
      temp: null
    };
  }

getCoords() {
  if (window.navigator.geolocation) { // if geolocation is supported
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
        this.fetchData();
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

fetchData() {
  let urlPrefix = "http://api.openweathermap.org/data/2.5/weather?";
  let lat = 'lat=' + this.state.latitude;
  let lon = 'lon=' + this.state.longitude;
  let apiKey = 'aca10c3987b461277deb339c916a5c20' //Matt's API key
  let otherApiKey = '70f1a80f7be9d0f99a01693ffe6fedf1' //Nitin's API key
  let urlSuffix = '&APPID=' + apiKey + "&units=imperial";
  let url = urlPrefix + lat + '&' + lon + urlSuffix;
  let self = this;

  xhr({
    url: url
  }, function (err, data) {
    self.setState({
      data: JSON.parse(data.body)
    });
  });
};

componentDidMount() {
  this.getCoords();
}

  render() {
    var currentTemp = 'Temp will go here after fetching coordinates';
    if (this.state.data.main) {
      currentTemp = this.state.data.main.temp;
    }
    return (
        <div>
          <h1>{this.state.latitude}</h1>
          <h1>{this.state.longitude}</h1>
          <h1>{this.state.data.name}</h1>
          <h1>{ currentTemp }</h1>
        </div>
    );
  }
}

export default WeatherApp;
