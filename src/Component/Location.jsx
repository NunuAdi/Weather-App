import axios from "axios";
import { useState, useEffect } from "react";

export const Location = () => {
    const [weatherData, setWeatherData] = useState({
        cityName: "",
        temperature: ""
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(getWeather);
    }, []);

    const getWeather = async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2773c9d33082c7781eab208ad469da0c&units=metric`
        );
        const {
            name,
            main: { temp }
        } = response.data;
        setWeatherData({ cityName: name, temperature: Math.round(temp) });
    };
    return (
        <div className="text-center"> Your currently location is <span className="font-bold">{weatherData.cityName}
            </span>, temperature is <span className="font-bold">{weatherData.temperature}°C</span>
        </div>
    );
};