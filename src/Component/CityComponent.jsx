import styled from "styled-components";
import React from "react";

const SearchBox = styled.form``;

const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;

  return (
    <>
      <img className = "w-32 h-32 m-auto my-10" src="/icon/perfect-day.svg" alt="img" />
      <div className = "text-black m-auto mb-8 text-lg"> Find your city </div>
      <div className = "flex flex-row m-5 rounded-sm justify-evenly">
        <SearchBox className = "text-sm font-thin right border-2 border-black rounded-3xl bg-black"
                    onSubmit = {fetchWeather}>
          <div className = "text-sm font-thin inline">
          <input className = "p-3 text-sm font-thin rounded-3xl"
                 onChange = {(e) => updateCity(e.target.value)}
                 placeholder="City"/>
          </div>
            <button className = "text-right bg-black text-sm text-white cursor-pointer rounded-2xl font-thin p-0 p-3 rounded-none outline-none " 
                    type = {"submit"}> Search </button>
        </SearchBox>
      </div>
    </>
  );
};
export default CityComponent;