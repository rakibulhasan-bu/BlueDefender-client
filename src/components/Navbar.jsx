import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthProvider } from "../provider/ContextProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthProvider);
  return (
    <div className="shadow-lg">
      <div className="container mx-auto px-12 flex items-center justify-between bg-white py-4">
        <h2 className="text-2xl font-extrabold">BlueDefender</h2>
        <div className="flex items-center gap-8">
          <NavLink className="text-xl" to={"/"}>
            Home
          </NavLink>
          <NavLink className="text-xl" to={"/orders"}>
            Orders
          </NavLink>
          {user ? (
            <h2 className="cursor-pointer" onClick={() => logOut()}>
              Logout
            </h2>
          ) : (
            <NavLink className="text-xl" to={"/login"}>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
