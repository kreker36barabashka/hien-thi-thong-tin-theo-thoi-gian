import React, { useEffect, useState } from 'react';

function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=YOUR_API_KEY')
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, []);

  return (
    <div>
      <h2>Thời Tiết</h2>
      {weather ? <p>{weather.weather[0].description}</p> : <p>Đang tải...</p>}
    </div>
  );
}

export default Weather;