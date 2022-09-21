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
        <Nav/>
        <SearchBar onSearch={(ciudad) => alert(ciudad)} />
      </div>
      <hr />
      <div>
        <Cards cities={data} />
      </div>
      <hr />
    </div>
  );
}

export default App;
