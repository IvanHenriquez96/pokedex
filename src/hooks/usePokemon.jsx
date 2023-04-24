import useSWR from "swr";
import fetcher from "../fetcher";

const usePokemon = (id = null) => {
  let url = id
    ? `https://pokeapi.co/api/v2/pokemon/${id}`
    : // : `https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`;
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`;

  const { data, error, isLoading } = useSWR(url, fetcher);

  return {
    pokemons: data,
    isLoading,
    isError: error,
  };
};

export default usePokemon;
