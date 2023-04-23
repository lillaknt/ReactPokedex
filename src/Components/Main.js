import React, { useState, useEffect } from "react";
import Card from "./Card";
import PokemonCard from "./Popup";
import axios from "axios";

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
  };

  const pokeFun = async () => {
    if (pokeData.length > 0) {
      setPokeData([]);
    }
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    const tempData = [];
    for (const item of res) {
      const result = await axios.get(item.url);
      tempData.push(result.data);
    }
    setPokeData(tempData.sort((a, b) => (a.id > b.id ? 1 : -1)));
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  const handlePrevClick = () => {
    setPokeData([]);
    setUrl(prevUrl);
  };

  const handleNextClick = () => {
    setPokeData([]);
    setUrl(nextUrl);
  };

  return (
    <>
      <div className="header">
        <div className="wrapper">
          <h1>
            <u>Lilla's PokéDex </u>
          </h1>
          <img src="./images/logo.png" alt="" />
          <h1>Gotta catch 'em all! </h1>

          <h2>Find each other with your new best friend: </h2>
        </div>
      </div>

      <div className="container">
        <Card
          pokemon={pokeData}
          loading={loading}
          infoPokemon={(poke) => {
            setPokeDex(poke);
            setShowPopup(true);
          }}
        />

        <div className="btn-group">
          <>
            {prevUrl && <button onClick={handlePrevClick}>Previous</button>}
            {nextUrl && <button onClick={handleNextClick}>Next</button>}
          </>
        </div>

        {showPopup && (
          <div className="overlay" onClick={closePopup}>
            <div className="popup">
              <PokemonCard data={pokeDex} closePopup={closePopup} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
