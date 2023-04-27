import { useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import BarraStats from "../components/BarraStats";

const InfoPokemon = () => {
  let { id } = useParams();
  const { pokemons, isError, isLoading } = usePokemon(
    `https://pokeapi.co/api/v2/pokemon/${id}/`
  );

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
      default:
        break;
    }
  };

  const diccionario = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "S-ATK",
    "special-defense": "S-DEF",
    speed: "SPD",
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
              <p className="mx-auto mt-1 ml-2 text-xs text-white md:mt-0 md:text-base">
                {pokemons.name.toUpperCase()}
              </p>

              <img
                src={pokemons.sprites.front_default}
                alt="imagen_pokemon"
                className="mx-auto bounce-top"
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
                      )} mx-1 rounded my-auto p-1 border-4 border-double border-black text-xs`}
                    >
                      {pkm.type.name.toUpperCase()}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Abilities*/}

          <div
            className={`border-4 border-double m-2 border-black text-white text-sm ${asignarFondo(
              pokemons.types[0].type.name
            )}`}
          >
            <p className="mb-1 ml-2 md:ml-14">ABILITIES</p>

            <div className="grid grid-cols-2">
              {pokemons.abilities.map((ab, index) => {
                return (
                  <div key={index} className="flex justify-center">
                    <p
                      className={`p-1 my-2 text-xs border-4 border-black border-double md:text-sm ${asignarFondo(
                        pokemons.types[0].type.name
                      )}`}
                    >
                      {ab.ability.name.toUpperCase()}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* STATS */}

          <div
            className={`border-4 border-double m-2 border-black text-white ${asignarFondo(
              pokemons.types[0].type.name
            )}`}
          >
            <div className="text-sm ">
              <p className="mb-1 ml-2 md:ml-14">STATS</p>
              <div>
                <div>
                  {pokemons.stats.map((stat, index) => {
                    console.log(stat);
                    return (
                      <div key={index} className="grid grid-cols-6 mt-2">
                        <p className="col-span-2 ml-2 text-sm md:ml-14 ">
                          {diccionario[stat.stat.name]}:
                        </p>
                        <p>{stat.base_stat}</p>
                        <div className="col-span-3">
                          <BarraStats valor_stat={stat.base_stat} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoPokemon;
