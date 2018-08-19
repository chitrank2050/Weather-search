import React, { Component } from 'react';
import './App.css';

import Titles from './components/Titles/Titles';
import Forms from './components/Forms/Forms';
import Weather from './components/Weather/Weather';

const API_KEY = process.env.REACT_APP_SECRET_CODE;

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  throwError = msg => {
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: msg
    });
  }

  getWeather = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    var country = e.target.elements.country.value;
    if(city && country) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      const data = await api_call.json();
      if(data['cod'] === '404') {
        this.throwError('City or Country no found');
      } else {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ''
        });
      }
    } else {
      this.throwError('Please Enter Both Values');
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Titles />
              </div>
              <div className="col-xs-7 form-container">
                <Forms getWeather={this.getWeather}/>
                <Weather data={this.state}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
