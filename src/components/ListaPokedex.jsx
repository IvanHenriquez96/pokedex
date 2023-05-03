import { useState } from "react";
import usePokemon from "../hooks/usePokemon";
import Buscador from "./Buscador";
import CardPokemon from "./CardPokemon";
export const ListaPokedex = () => {
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`);

  const { pokemons, isError, isLoading } = usePokemon(url);

  const aux = usePokemon(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9999`);
  const allPokemons = aux.pokemons;

  if (isError) return <div>Error al traer los datos</div>;
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Cargando...</p>
      </div>
    );

  return (
    <div>
      <Buscador pokemons={allPokemons} />
      <div className="mx-auto md:w-12/12 fade-in">
        <div className="gap-4 text-center md:grid-cols-4">
          <div className="grid gap-4 text-center md:grid-cols-4">
            {pokemons.results.map((pokemon) => {
              return (
                <CardPokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
              );
            })}
          </div>
        </div>
      </div>

      <br />
      <div className="flex justify-center text-white mb-7">
        <button
          className="px-10 m-2 text-2xl bg-orange-500 border-4 border-double"
          onClick={() => setUrl(pokemons.previous)}
          disabled={pokemons.previous == null}
        >
          {"<"}
        </button>
        <button
          className="px-10 m-2 text-2xl bg-orange-500 border-4 border-double"
          onClick={() => setUrl(pokemons.next)}
          disabled={pokemons.next == null}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};
