import React from "react";
import {WeatherIcons} from "../App";

export const WeatherInfoIcons = {
    sunset: "/icon/temp.svg",
    sunrise: "/icon/temp.svg",
    humidity: "/icon/humidity.svg",
    wind: "/icon/wind.svg",
    pressure: "/icon/pressure.svg",
    // rain: "/icon/rain.svg",
};

const WeatherInfoComponent = (props) => {
    const {name, value} = props;
    return (
        <div className = "flex m-1 flex-row items-center justify-evenly">
            <img className = "w-8 h-8" src={WeatherInfoIcons[name]} alt=""/>
            <div className = "flex flex-col text-sm m-4">
                {value}
                <span className = "text-xs capitalize">{name}</span>
            </div>
        </div>
    );
  };
  
  const WeatherComponent = (props) => {
      const {weather} = props;
      const isDay = weather?.weather[0].icon?.includes('d')
      const getTime = (timeStamp) => {
          return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
      }
      return (
          <>
          <div className = "flex w-full m-auto flex-row justify-between items-center">
            <div className = "m-auto capitalize text-sm">
                  <span className = "text-3xl">{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                        {`  |  ${weather?.weather[0].description}`}
                        <img className = "inline w-24 h-24 mx-6" src={WeatherIcons[weather?.weather[0].icon]} alt=""/>
            </div>      
          </div>
          <div className = "capitalize text-3xl font-bold">
              {`${weather?.name}, ${weather?.sys?.country}`}
          </div>
  
          <div className = "my-5 m-top-4 capitalize font-bold text-sm w-11/12 content-start text-center"> Weather Info </div>
  
          <div className = "flex flex-row items-center flex-wrap w-11/12 justify-evenly">
              <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"} value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
              <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity}/>
              <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed}/>
              <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure}/>
              {/* <div className = "text-blue-200"><WeatherInfoComponent name={"rain"} value={weather?.main.rain}/>Chance of rain: 23%</div> */}
              
          </div>
        </>
      );
  };

export default WeatherComponent;