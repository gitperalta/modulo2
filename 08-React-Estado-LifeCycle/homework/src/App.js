import React from "react";
import "./App.css";
import Cards from "./components/Cards";
import Nav from "./components/Nav";

export default function App() {
  const [cities, setCities] = React.useState([]);
  // cities => []
  // setCtiies => Funncion que actualiza a cities.

  const apiKey = `4ae2636d8dfbdc3044bede63951a019b`;

  function onSearch(city) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((json) => {
        if (json !== undefined) {
          const city = {
            min: Math.round(json.main.temp_min),
            max: Math.round(json.main.temp_max),
            img: json.weather[0].icon,
            id: json.id,
            wind: json.wind.speed,
            temp: json.main.temp,
            name: json.name,
            weather: json.weather[0].main,
            clouds: json.clouds.all,
            latitude: json.coord.lat,
            longitude: json.coord.lon,
          };
          setCities((oldCities) => [...oldCities, city]);
        } else {
          alert(`Ciudad no encontrada.`);
        }
      })
      .catch((e) => console.log(e));
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((city) => city.id !== id));
  }

  return (
    <div className="App">
      {/* Tu código acá: */}
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
}
