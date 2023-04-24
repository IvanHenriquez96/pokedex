import { useRef, useState } from "react";
import CajaDialogo from "./CajaDialogo";
import { useNavigate } from "react-router-dom";

const Bienvenida = () => {
  const div_bienvenida = useRef(null);
  const navigate = useNavigate();
  const dialogos = [
    "¡Saludos, joven entrenador! Soy el Profesor Oak, experto en la investigación y estudio de los Pokémon.",
    " Estoy muy emocionado de poder entregarte tu propia Pokédex, una herramienta vital para todo entrenador que quiera conocer más sobre estas fascinantes criaturas.",
    "Recuerda usar tu Pokédex con sabiduría y cuidado, ¡y que la aventura comience! ¡Buena suerte, joven entrenador!",
  ];

  const [dialogoDesplegado, setDialogoDesplegado] = useState(0);

  const siguienteTexto = () => {
    const cantidad = dialogos.length - 1;
    // console.log(dialogoDesplegado + 1, cantidad);
    let aux = dialogoDesplegado + 1;

    if (aux <= cantidad) {
      setDialogoDesplegado(dialogoDesplegado + 1);
    } else {
      // document.querySelector("#page_intro").classList.add("fade-out");
      div_bienvenida.current.classList.add("fade-out");
      setTimeout(() => {
        navigate("/pokedex");
      }, 1000);
    }
  };

  return (
    <div className="relative">
      <div ref={div_bienvenida} className="fade-in">
        <img src="/img/oak.png" alt="profesor oak" className="mx-auto w-52" />
        <CajaDialogo dialogo={dialogos[dialogoDesplegado]} />
      </div>
      <div
        onClick={siguienteTexto}
        className=" absolute z-10 left-0 top-0 right-0 bottom-0"
      ></div>
    </div>
  );
};

export default Bienvenida;
