import { createContext, useContext } from "react";
import { useAuthController } from "./authHook";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={useAuthController()}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
