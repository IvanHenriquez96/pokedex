import React from "react";
import pokeball from "../assets/pokeball.svg";

const Loading = () => {
  return (
    <div className="bg-gray-300 w-full h-screen flex justify-center items-center">
      <img src={pokeball} className="w-40 animate-spin" alt="" />
    </div>
  );
};

export default Loading;
