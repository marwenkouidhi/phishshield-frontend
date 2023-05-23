import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { menuData } from "src/data/menuData";
import { useAuth } from "src/store/authContext/authContext";

const Navbar = () => {
  const { authState, logout } = useAuth();

  let { pathname } = useLocation();

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center">
        <img src="/logo.png" alt="logo" className="h-20" />

        <div className="flex space-x-3">
          {menuData.map(({ text, url }, _) => {
            const class_ =
              url === pathname
                ? "cursor-pointer border text-blue-primary font-bold px-2 text-blue-secondary border-blue-secondary border"
                : "cursor-pointer border border-transparent text-blue-primary font-bold px-2 hover:text-blue-secondary hover:border-blue-secondary hover:border";
            return (
              <Link to={url} key={_}>
                <div className={class_}>{text}</div>
              </Link>
            );
          })}
        </div>

        {!authState.isAuthenticated && (
          <div className="flex space-x-3">
            <Link to="/login">
              <button className="p-1 px-5 border-solid border-blue-primary bg-blue-primary border rounded-md text-white hover:opacity-90">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="p-1 px-5 border-solid border-blue-primary border rounded-md">
                Register
              </button>
            </Link>
          </div>
        )}
        {authState.isAuthenticated && (
          <button
            className="p-1 px-5 border-solid border-blue-primary text-blue-primary border rounded-md text-xs hover:bg-blue-primary hover:text-white"
            onClick={logout}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
