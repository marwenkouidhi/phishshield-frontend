import React, { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "src/store/authContext/authContext";
const Profile = () => {
  const { logout, authState } = useAuth();

  return (
    <div className="flex space-x-5">
      <div className="flex space-x-2 items-center text-blue-primary font-bold bg-black/10 rounded-full pr-8">
        <FaUserCircle className="" size={30} />
        <div>Hello, {authState.user?.last_name}</div>
      </div>
      <button
        className="p-1 px-5 border-solid border-blue-primary text-blue-primary border rounded-md text-xs hover:bg-blue-primary hover:text-white"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
