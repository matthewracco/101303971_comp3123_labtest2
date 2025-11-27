import React from "react";

function DisplayWeather({ weather }) {
    if (weather.cod === "404") {
        return <div>City not found. Please try again.</div>;
    }

    const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

    return (
        <div className="weather-box">
            <h2>{weather.name}</h2>
            <img src={iconUrl} alt="Weather Icon" />
            <h3>{weather.main.temp}°C</h3>
            <p>{weather.weather[0].description} </p>
        </div>
    );
}

export default DisplayWeather;