import useSWR from "swr";
import fetcher from "../fetcher";

// tipos de peticiones
//una pagina de la pokedex

// {
//   type: "pokedex"
//   url: "https://pokeapi.co/api/v2/pokemon/?offset=40&limit=20"
// }

//Un solo pokemon
// {
//   type: "pokemon"
//   id_pokemon: 1
// }

const usePokemon = (url) => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  return {
    pokemons: data,
    isLoading,
    isError: error,
  };
};

export default usePokemon;
