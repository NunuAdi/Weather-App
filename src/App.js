import React, { useState } from "react";
import Axios from "axios";
import CityComponent from "./Component/CityComponent";
import WeatherComponent from "./Component/WeathweInfoComponent";
import { Location } from "./Component/Location";

export const WeatherIcons = {
  "01d": "/icon/sunny.svg",
  "01n": "/icon/night.svg",
  "02d": "/icon/day.svg",
  "02n": "/icon/cloudy-night.svg",
  "03d": "/icon/cloudy.svg",
  "03n": "/icon/cloudy.svg",
  "04d": "/icon/perfect-day.svg",
  "04n": "/icon/cloudy-night.svg",
  "09d": "/icon/rain.svg",
  "09n": "/icon/rain-night.svg",
  "10d": "/icon/rain.svg",
  "10n": "/icon/rain-night.svg",
  "11d": "/icon/storm.svg",
  "11n": "/icon/storm.svg",
};

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const API_KEY = "5f4fb466fb887574b062a245bc74dee9";
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
    );
    updateWeather(response.data);
  };

  return (
      <div className = "flex flex-col items-center m-auto rounded p-3 w-100 bg-opacity-40 .shadow-sm bg-white ">
      <Location />
      <div className = "text-black m-auto text-lg font-bold my-4"><span className = "text-blue-500"> Weather App </span></div>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </div>
  );
}

export default App;