import React, { useCallback, useEffect, useState } from "react";

const CardPokemon = ({ name, url }) => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    obtenerPokemon();
  }, []);

  const obtenerPokemon = useCallback(async () => {
    const res = await fetch(url);
    const data = await res.json();

    setPokemon(data);
    setIsLoading(false);
  }, []);

  // console.log(pokemon);

  if (!isLoading) {
    return (
      <div className="border rounded bg-red-400  ">
        <div className="p-4 m-4 border rounded-full bg-gray-50">
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </div>

        <div className="grid grid-cols-2">
          {pokemon.types.map((pkm) => {
            return (
              <p key={pkm.type.name} className="bg-white m-2 p-1 rounded">
                {pkm.type.name.toUpperCase()}
              </p>
            );
          })}
          {/* <p>tipo 1</p>
          <p>tipo 2</p> */}
        </div>

        <div className="bg-gray-400 p-2 text-gray-50">
          <p>{name.toUpperCase()}</p>
        </div>
      </div>
    );
  }
};

export default CardPokemon;
