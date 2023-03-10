import React from "react";

const Buscador = () => {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        className="m-4 w-1/3 rounded px-2 py-1"
        placeholder="Buscar Pokemon"
      />
    </div>
  );
};

export default Buscador;
