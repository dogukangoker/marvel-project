import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import axios from "axios";
import Header from "./layouts/Header/Header";
import Characters from "./components/Character/Characters";
function App() {
  const [heroes, setHeroes] = useState([]);
  useEffect(() => {
    const getHeroes = async () => {
      //const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?apikey=${PUBLIC_KEY}&hash=${PRIVATE_KEY}`);
      //setHeroes(response.data.data.results);
    };
    //getHeroes();
  }, []);
  return (
    <div className="container">
      <Header />
      <Characters />
    </div>
  );
}

export default App;
