import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import PrivateFooter from "src/components/PrivateFooter";
import PrivateNavbar from "src/components/PrivateNavbar";
import Sidebar from "src/components/Sidebar";
import { useAuth } from "src/store/authContext/authContext";
import { useEmail } from "src/store/emailContext/emailContext";

const PrivateLayout = () => {
  const {
    authState: { isAuthenticated },
  } = useAuth();

  const { emailState, loadEmails } = useEmail();

  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated === true) {
      navigate("/login");
    }
  });

  useEffect(() => {
    loadEmails();
  }, []);

  return (
    <div className="text-sm flex-col bg-red-200 h-screen">
      <div className="min-h-full  flex">
        <Sidebar />
        <div className="grow flex flex-col space-y-1 bg-gray-100">
          <PrivateNavbar />
          <Outlet />
        </div>
      </div>
      <PrivateFooter />
    </div>
  );
};

export default PrivateLayout;
