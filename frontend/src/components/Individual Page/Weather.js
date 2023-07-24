import React, { useEffect, useState } from "react";
import { WiHumidity, WiBarometer, WiCloudyWindy } from "weather-icons-react";
import jsonp from "jsonp";

const Weather = ({ city, apiKey }) => {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    jsonp(url, null, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        setWeatherData(data);
      }
    });
  }, [city, apiKey]);

  if (!weatherData) return <div>Loading...</div>;

  return (
    <div className="weather">
      <p>{city}</p>
      <div className="cityname">
        <p className="temp">{weatherData.main.temp.toFixed(1)}°c</p>
      </div>
      <div className="attrb">
        <div className="head">
          <p>
            <strong>H:</strong>
            {weatherData.main.temp_max.toFixed(0)}°c
          </p>
        </div>
        <div className="head">
          <p>
            <strong>L:</strong>
          </p>
          <p> {weatherData.main.temp_min.toFixed(0)}°c</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
