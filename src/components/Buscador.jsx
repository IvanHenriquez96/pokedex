import { useState } from "react";

const Buscador = ({ pokemons }) => {
  const [isWritting, setIsWritting] = useState(false);
  const [listaPokemon, setListaPokemon] = useState(null);

  let tiempoDeEsperaId;

  const writtingHandle = (e) => {
    // console.log(e.target.value.length);
    clearInterval(tiempoDeEsperaId);

    e.target.value.length > 0 ? setIsWritting(true) : setIsWritting(false);

    tiempoDeEsperaId = setTimeout(() => {
      console.log("va a buscar");
      buscarPokemons(e.target.value);
    }, 2000);
  };

  const buscarPokemons = async (nombre) => {
    console.log("buscó", nombre, pokemons);
    let encontrados = await pokemons.results.filter((pkm) => {
      return pkm.name.includes(nombre.toLowerCase());
    });
    setListaPokemon(encontrados);
  };

  return (
    <>
      <div className="relative">
        <div className="flex justify-center">
          <input
            onChange={writtingHandle}
            name="buscador"
            type="text"
            className="w-full px-2 py-1 border-4 border-black border-double my-7 md:w-2/5"
            placeholder="Buscar Pokémon"
          />
        </div>
        {isWritting && (
          <div className="absolute left-0 right-0 z-10 mx-auto bg-gray-200 shadow-xl top-14 md:w-2/5 w-12/12 min-h-fit ">
            {listaPokemon == null ? (
              <p className="m-2">Buscando</p>
            ) : (
              <ul>
                {listaPokemon.map((pkm) => (
                  <li className="my-3 ml-3" key={pkm.name}>
                    {pkm.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Buscador;
