import React, { useEffect } from "react";
import { Redirect, useNavigate } from "react-router-dom";
import LoginForm from "src/components/LoginForm/LoginForm";
import { useAuth } from "src/store/authContext/authContext";

const LoginPage = () => {
  const {
    authState: { isAuthenticated },
  } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/account");
    }
  });
  return (
    <div className="h-full flex justify-center items-center ">
      <>
        {/* component */}
        <div className="py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-secondary to-blue-primary shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div className="flex flex-col space-y-10">
                  <h1 className="text-2xl font-semibold">Login</h1>
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default LoginPage;
