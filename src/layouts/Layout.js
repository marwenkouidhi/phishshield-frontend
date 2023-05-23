import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen space-y-5 ">
      <div>
        <Navbar />
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
