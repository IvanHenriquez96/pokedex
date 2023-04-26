import { useEffect, useState } from "react";

const BarraStats = ({ valor_stat }) => {
  const [porcentaje, setPorcentaje] = useState(0);
  useEffect(() => {
    let prtje = Math.round((valor_stat * 100) / 255);
    setPorcentaje(prtje);
  }, []);

  return (
    <div className="relative px-3 pt-1">
      <div className="flex h-3 overflow-hidden text-xs bg-white border-4 border-black border-double md:mb-3 md:h-4">
        <div
          className={`flex flex-col justify-center text-center text-white bg-yellow-600 shadow-none whitespace-nowrap`}
          style={{ width: `${porcentaje}%` }}
        ></div>
      </div>
    </div>
  );
};

export default BarraStats;
