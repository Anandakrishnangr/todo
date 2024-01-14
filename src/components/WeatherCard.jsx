import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Typography, CardContent, Card } from '@mui/material';

const cardStyle = {
  minWidth: 300,
  maxWidth: 400,
  margin: 'auto',
  marginTop: 20,
  padding: 16,
  textAlign: 'center',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: 8,
};

const convertToFahrenheit = (temperatureInCelsius) => {
  return (temperatureInCelsius - 273.15).toFixed(0);
};

const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString();
};

const WeatherCard = () => {
  const [weatherDetails, setWeatherDetails] = useState({
    city: 'Sample City',
    temperature: 25,
    description: 'Partly Cloudy',
    humidity: 60,
    windSpeed: 10,
    sunrise: 0,
    sunset: 0,
    currentTime: 0,
    currentDate: 0,
  });

  useEffect(() => {
    axios
      .get('https://api.openweathermap.org/data/2.5/weather?lat=9.93&lon=76.26&appid=0ef514e0db4ee86968a309edd698fede')
      .then((response) => {
        const mainWeather = response.data.weather[0];
        const mainDetails = response.data.main;
        const windDetails = response.data.wind;
        const sysDetails = response.data.sys;

        setWeatherDetails({
          city: response.data.name,
          temperature: convertToFahrenheit(mainDetails.temp),
          description: mainWeather.description,
          humidity: mainDetails.humidity,
          windSpeed: windDetails.speed,
          sunrise: formatTime(sysDetails.sunrise),
          sunset: formatTime(sysDetails.sunset),
          currentTime: formatTime(response.data.dt),
          currentDate: formatDate(response.data.dt),
          // Add any additional information from the API response here
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Card style={cardStyle}>
        <CardContent>
          <Typography variant="h5" component="div">
            {weatherDetails.city}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {weatherDetails.currentDate} - {weatherDetails.currentTime}
          </Typography>
          <Typography color="textSecondary">
            Temperature: {weatherDetails.temperature}°C
          </Typography>
          <Typography color="textSecondary">
            Description: {weatherDetails.description}
          </Typography>
          <Typography color="textSecondary">
            Humidity: {weatherDetails.humidity}%
          </Typography>
          <Typography color="textSecondary">
            Wind Speed: {weatherDetails.windSpeed} km/h
          </Typography>
          <Typography color="textSecondary">
            Sunrise: {weatherDetails.sunrise}
          </Typography>
          <Typography color="textSecondary">
            Sunset: {weatherDetails.sunset}
          </Typography>
          {/* Display additional information here */}
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherCard;
