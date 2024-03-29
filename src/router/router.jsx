import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LayoutPublic from "../Layouts/LayoutPublic";
import { ListaPokedex } from "../components/ListaPokedex";
import InfoPokemon from "../pages/InfoPokemon";
// import InfoMovie from "../pages/InfoMovie";
// import MiCuenta from "../pages/MiCuenta";
// import NotFound from "../pages/NotFound";
// import Carrito from "../pages/Carrito";
// import PagoExitoso from "../pages/PagoExitoso";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    // errorElement: <NotFound />,
    children: [
      { index: true, element: <App /> },

      { path: "/pokedex", element: <ListaPokedex /> },
      { path: "/pokedex/:id", element: <InfoPokemon /> },

      // { path: "/movie/:id", element: <InfoMovie /> },
      // { path: "/account", element: <MiCuenta /> },
      // { path: "/cart", element: <Carrito /> },
      // { path: "/pagoExitoso", element: <PagoExitoso /> },
    ],
  },
]);
