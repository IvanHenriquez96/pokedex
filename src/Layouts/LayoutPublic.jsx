import { Link, Outlet } from "react-router-dom";

const LayoutPublic = () => {
  return (
    <div>
      <Link to={"/pokedex"}>
        <img src="/img/logo.png" className="w-64 mx-auto" alt="logo_pokemon" />
      </Link>
      <br />
      <br />
      <div className="px-4 mx-auto md:container md:px-0">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutPublic;
