import React, { useState, useEffect } from "react";
import WeatherSearch from "./components/CitySearch";
import WeatherDisplay from "./components/DisplayWeather";
import "./App.css";

function App() {
  const [city, setCity] = useState("Toronto");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7eae72c6811f0905a633c9f4c7bc3923&units=metric`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [city]);

  return (
    <div className="app-container">
      <WeatherSearch setCity={setCity} />
      <h1>Todays Forecast</h1>
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
}

export default App;
