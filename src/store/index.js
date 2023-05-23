import React from "react";
import AuthProvider from "./authContext/authContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import EmailProvider from "./emailContext/emailContext";

export const GlobalStore = ({ children }) => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <EmailProvider>
          <BrowserRouter>
            <ProSidebarProvider>{children}</ProSidebarProvider>
          </BrowserRouter>
        </EmailProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
};
