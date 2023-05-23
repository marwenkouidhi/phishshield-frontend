import { createContext, useContext } from "react";
import { useEmailController } from "./emailHook";

const EmailContext = createContext();

export const useEmail = () => useContext(EmailContext);

const EmailProvider = ({ children }) => {
  return (
    <EmailContext.Provider value={useEmailController()}>
      {children}
    </EmailContext.Provider>
  );
};

export default EmailProvider;
