import { Link, Outlet } from "react-router-dom";

const LayoutPublic = () => {
  return (
    <div>
      <Link to={"/"}>
        <img src="img/logo.png" className="w-64  mx-auto" alt="logo_pokemon" />
      </Link>
      <br />
      <br />
      <div className=" md:container md:px-0 px-4 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutPublic;
