import React, { useCallback, useEffect, useState } from "react";
import CardPokemon from "./CardPokemon";
import CardPokemonSkeleton from "./CardPokemonSkeleton";
import Loading from "./Loading";

const SeccionPokemons = () => {
  const [datosPokemon, setDatosPokemon] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    obtenerDatosPokemons();
  }, [url]);

  const obtenerDatosPokemons = async () => {
    setIsLoading(true);

    const res = await fetch(url);
    const data = await res.json();

    setDatosPokemon(data);

    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <div className=" md:grid-cols-4 gap-4 text-center">
          <h1>URL: {url}</h1>
          {/* {console.log("renderea seccion", datosPokemon)} */}
          <div className="p-4  grid md:grid-cols-4 gap-4 text-center">
            {datosPokemon.results.map((pokemon) => {
              return (
                <CardPokemon
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                />
              );
            })}
          </div>

          <div className="flex justify-center">
            <button
              className="px-6 py-1 mx-2 rounded bg-red-500 text-white"
              tipo_boton={"anterior"}
              onClick={() => {
                setUrl(datosPokemon.previous);
              }}
            >{`Anterior`}</button>
            <button
              className="px-6 py-1 mx-2 rounded bg-red-500 text-white"
              tipo_boton={"siguiente"}
              onClick={() => {
                setUrl(datosPokemon.next);
              }}
            >{`Siguiente`}</button>
          </div>
        </div>
      </>
    );
  }
};

export default SeccionPokemons;
