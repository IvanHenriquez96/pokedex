import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  // console.log(pokemon);

  if (!isLoading) {
    return (
      <>
        <Link to={`/pokedex/${pokemon.id}`}>
          {/* <Link href={`/Pokemon/${encodeURIComponent(pokemon.id)}`}> */}
          {/* MODO CELULAR */}

          <div
            className={` border-double border-4  border-gray-900  ${asignarFondo(
              pokemon.types[0].type.name
            )} bg-gray-400-200 grid grid-cols-3  `}
          >
            <div>
              {/* <img src={pokemon.sprites.other["official-artwork"].front_default} alt="" /> */}
              <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="col-span-2 text-white">
              <p className="mt-1">{name.toUpperCase()}</p>
              <div className="grid grid-cols-2 mt-2">
                {pokemon.types.map((pkm) => {
                  return (
                    <p
                      key={pkm.type.name}
                      className={`text-white ${asignarFondo(
                        pkm.type.name
                      )} m-2 rounded md:text-xs my-auto p-1 border-4 border-double border-black text-sm`}
                    >
                      {pkm.type.name.toUpperCase()}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </Link>
      </>
    );
  }
};

export default CardPokemon;
