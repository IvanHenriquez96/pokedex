import { useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";

const InfoPokemon = () => {
  let { id } = useParams();
  const { pokemons, isError, isLoading } = usePokemon(id);

  isLoading && <p>Cargando...</p>;
  isError && console.log(isError);

  const asignarFondo = (tipo) => {
    switch (tipo) {
      case "grass":
        return "typeGrass";
      case "water":
        return "typeWater";
      case "fire":
        return "typeFire";
      case "flying":
        return "typeFlying";
      case "normal":
        return "typeNormal";
      case "ghost":
        return "typeGhost";
      case "steel":
        return "typeSteel";
      case "poison":
        return "typePoison";
      case "fairy":
        return "typeFairy";
      case "rock":
        return "typeRock";
      case "psychic":
        return "typePsychic";
      case "ice":
        return "typeIce";
      case "electric":
        return "typeElectric";
      case "ground":
        return "typeGround";
      case "bug":
        return "typeBug";
      case "dark":
        return "typeDark";
      case "dragon":
        return "typeDragon";
      case "fighting":
        return "typeFighting";
        break;

      default:
        break;
    }
  };

  return (
    <>
      {!isLoading && (
        <div className="mx-auto md:w-6/12 fade-in">
          <div
            className={`grid grid-cols-3 border-4 border-black border-double mt-7 m-2 ${asignarFondo(
              pokemons.types[0].type.name
            )}`}
          >
            <div className="mx-auto">
              <p className="mx-auto mt-1 text-xs text-white md:mt-0 md:text-base">
                {pokemons.name.toUpperCase()}
              </p>

              <img
                src={pokemons.sprites.front_default}
                alt="imagen_pokemon"
                className="mx-auto"
              />
            </div>
            <div className="col-span-2">
              <p className="mt-1 ml-2 text-xs text-white md:ml-0 md:text-base md:mt-0">
                N°: 1
              </p>
              <div className="grid grid-cols-2 mt-7">
                {pokemons.types.map((pkm) => {
                  return (
                    <p
                      key={pkm.type.name}
                      className={`text-white ${asignarFondo(
                        pkm.type.name
                      )} m-2 rounded my-auto p-1 border-4 border-double border-black text-sm`}
                    >
                      {pkm.type.name.toUpperCase()}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>

          {/* STATS */}

          <div
            className={`grid grid-cols-3 border-4 border-black border-double mt-7 m-2 ${asignarFondo(
              pokemons.types[0].type.name
            )}`}
          >
            <div className="mx-auto">
              <p className="p-1 mx-auto text-xs text-white md:text-base">STATS</p>
              <ul className="text-xs text-white md:text-base">
                <li className="mt-2">HP:</li>
                <li className="mt-2">ATK:</li>
                <li className="mt-2">DEF:</li>
                <li className="mt-2">S-ATK:</li>
                <li className="mt-2">S-DEF:</li>
                <li className="mt-2">SPD:</li>
              </ul>
              <br />
            </div>
            <div className="col-span-2">
              <br />
              <ul className="text-xs text-white md:text-base">
                {pokemons.stats.map((stat, index) => {
                  return (
                    <li key={index} className="mt-2">
                      {stat.base_stat}
                    </li>
                  );
                })}
              </ul>
              <br />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoPokemon;
