import usePokemon from "../hooks/usePokemon";
import Buscador from "./Buscador";
import CardPokemon from "./CardPokemon";
export const ListaPokedex = () => {
  const { pokemons, isError, isLoading } = usePokemon();

  if (isError) return <div>Error al traer los datos</div>;
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Cargando...</p>
      </div>
    );

  return (
    <div>
      <Buscador />
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

      <button className="w-full p-2 px-5 mx-auto my-5 text-white bg-orange-500 rounded">
        More...
      </button>
    </div>
  );
};
