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

  getWeather = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    var country = e.target.elements.country.value;
    if(city && country) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&unit=metric`);
      const data = await api_call.json();
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please Enter the values'
      });
    }
  }

  render() {
    return (
      <div>
        <Titles />
        <Forms getWeather={this.getWeather}/>
        <Weather data={this.state}/>
      </div>
    );
  }
}

export default App;
