import React from "react";

const PokemonCard = ({ data, closePopup }) => {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <div className="overlay" onClick={closePopup}>
            <div className="overlay-inner">
              <button className="close" onClick={closePopup}>
                <i class="fa-sharp fa-solid fa-x"></i>{" "}
              </button>
              <div id="pokecard">
                <div className="group">
                  <h2>{data.stats[0].base_stat} HP</h2>
                </div>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                  alt=""
                />
                <h2 className="poke-name">{data.name}</h2>

                <div className="abilities">
                  {data.abilities.map((poke) => {
                    return (
                      <>
                        <div className="group">
                          <h2>{poke.ability.name}</h2>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="base-stat">
                  {data.stats.map((poke) => {
                    return (
                      <>
                        <h3>
                          {poke.stat.name}:{poke.base_stat}
                        </h3>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PokemonCard;
