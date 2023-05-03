export const CardPokemonSkeleton = () => {
  return (
    <div
      className={` border-double border-4  border-gray-900 
      )} bg-gray-400-200 grid grid-cols-3  `}
    >
      <div>{/* <img src={pokemon.sprites.front_default} alt="" /> */}</div>
      <div className="col-span-2 text-white">
        {/* <p className="mt-1">{name.toUpperCase()}</p> */}
        <p className="mt-1">TEST</p>
        <div className="grid grid-cols-2 mt-2">
          <p
            className={`text-white mx-1 rounded text-xs my-auto p-1 border-4 border-double border-black text-sm`}
          >
            {/* {pkm.type.name.toUpperCase()} */}
            TEST
          </p>
        </div>
      </div>
    </div>
  );
};
