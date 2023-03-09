import React from "react";

const CardPokemonSkeleton = () => {
  return (
    <div className="border rounded p-4 bg-gray-300">
      {/* <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt=""
      /> */}
      <img
        src="https://via.placeholder.com/400x400?text="
        className="rounded"
        alt="skeleton"
      />
    </div>
  );
};

export default CardPokemonSkeleton;
