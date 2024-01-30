import axios from "axios";
import React, { useEffect, useState } from "react";
import { Typography, CardContent, Card } from "@mui/material";
// import day from "..";

const convertToFahrenheit = (temperatureInCelsius) => {
  return (temperatureInCelsius - 273.15).toFixed(0);
};

const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString();
};

const WeatherCard = () => {
  function initGeolocation() {
    return new Promise((resolver, reject) => {
      if (navigator.geolocation) {
        // Call getCurrentPosition with success and failure callbacks
        navigator.geolocation.getCurrentPosition((response) => {
          const latitude = response.coords.latitude;
          const longitude = response.coords.longitude;

          resolver({ latitude, longitude });
        });
      } else {
        alert("Sorry, your browser does not support geolocation services.");
      }
    });
  }

  const [weatherDetails, setWeatherDetails] = useState({
    city: "Loading...",
    temperature: 25,
    description: "Partly Cloudy",
    humidity: 60,
    windSpeed: 10,
    sunrise: 0,
    sunset: 0,
    currentTime: 0,
    currentDate: 0,
  });

  const cardStyle = {
    minWidth: 300,
    maxWidth: 400,
    margin: "auto",
    marginTop: 20,
    padding: 16,
    // textAlign: "center",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: 8,
    color: "white",
    background:
      weatherDetails.currentTime <= weatherDetails.sunrise
        ? `url(/day.jpg)`
        : `url(/night.jpg)`,
    backgroundSize: "100%",
  };
  let fetchWeather = async () => {
    let response = await initGeolocation();
    let defaultLat = response.latitude ? response.latitude : 9.93;
    let defaultLng = response.longitude ? response.longitude : 76.26;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${defaultLat}&lon=${defaultLng}&appid=0ef514e0db4ee86968a309edd698fede`
      )
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
  };
  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div>
      <Card style={cardStyle}>
        <CardContent>
          <div style={{ display: "flex" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flex: 1,
                position: "relative",
                top: "0",
                left: "0",
              }}
            >
              {weatherDetails.city}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                flex: 1,
                position: "relative",
                top: "0",
                right: "0",
              }}
            >
              {weatherDetails.currentDate} - {weatherDetails.currentTime}
            </Typography>
          </div>

          <Typography
            color={
              weatherDetails.currentTime >= weatherDetails.sunrise
                ? "textSecondary"
                : "white"
            }
            sx={{
              position: "relative",
              top: "50%",
              left: "50%",
              transform: "traslate(-50% -50%)",
              fontSize: "40px",
            }}
          >
            {weatherDetails.temperature}°C
          </Typography>
          <Typography
          // color={
          //   weatherDetails.currentTime >= weatherDetails.sunrise
          //     ? "textSecondary"
          //     : "white"
          // }
          >
            Description: {weatherDetails.description}
          </Typography>
          <Typography
          // color={
          //   weatherDetails.currentTime >= weatherDetails.sunrise
          //     ? "textSecondary"
          //     : "white"
          // }
          >
            Humidity: {weatherDetails.humidity}%
          </Typography>
          <Typography
          // color={
          //   weatherDetails.currentTime >= weatherDetails.sunrise
          //     ? "textSecondary"
          //     : "white"
          // }
          >
            Wind Speed: {weatherDetails.windSpeed} km/h
          </Typography>
          <Typography
          // color={
          //   weatherDetails.currentTime >= weatherDetails.sunrise
          //     ? "textSecondary"
          //     : "white"
          // }
          >
            Sunrise: {weatherDetails.sunrise}
          </Typography>
          <Typography
          // color={
          //   weatherDetails.currentTime >= weatherDetails.sunrise
          //     ? "textSecondary"
          //     : "white"
          // }
          >
            Sunset: {weatherDetails.sunset}
          </Typography>
          {/* Display additional information here */}
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherCard;
