import React from "react";
import "./App.css";
// import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import data from "./data.js";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <hr />
      <div>
        <SearchBar onSearch={(ciudad) => alert(ciudad)} />
      </div>
      <br />
      <div className="card">
        <Cards cities={data} />
      </div>
    </div>
  );
}

export default App;
