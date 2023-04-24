import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
  return (
    <div>
      <img src="/src/assets/logo.png" className="w-64  mx-auto" alt="logo_pokemon" />
      <br />
      <br />
      <div className=" md:container md:px-0 px-4 mx-auto bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutPublic;
