import { useState } from "react";
// import useFindPokemon from "../hooks/useFindPokemon";

const Buscador = () => {
  const [isWritting, setIsWritting] = useState(false);

  let tiempoDeEsperaId;

  const writtingHandle = (e) => {
    // console.log(e.target.value.length);
    clearInterval(tiempoDeEsperaId);

    e.target.value.length > 0 ? setIsWritting(true) : setIsWritting(false);

    tiempoDeEsperaId = setTimeout(() => {
      console.log("va a buscar");
      // const x = useFindPokemon();
    }, 2000);
  };

  return (
    <>
      <div className="relative">
        <div className="flex justify-center">
          <input
            onChange={writtingHandle}
            name="buscador"
            type="text"
            className="  border-4 border-double border-black my-7 px-2 py-1 w-full md:w-2/5 "
            placeholder="Buscar Pokémon"
          />
        </div>
        {isWritting && (
          <div className="absolute right-0 left-0 top-14 bg-gray-200 md:w-2/5 w-12/12 shadow-xl  min-h-fit mx-auto  z-10 ">
            <p className="m-2">En Desarrollo</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Buscador;
