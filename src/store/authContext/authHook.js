import { useReducer } from "react";
import { authReducer, initialAuthState } from "./authReducer";
import { LOGIN, LOGOUT } from "./actionTypes";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export const useAuthController = () => {
  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  const useLoginWithGoogle = () =>
    useGoogleLogin({
      scope: ["https://mail.google.com"],
      flow: "auth-code",
      onSuccess: ({ code, profile }) => {
        axios
          .post("http://127.0.0.1:8000/api/dj-rest-auth/google/", {
            code,
          })
          .then((res) => {
            const { access: token, user } = res.data;
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", JSON.stringify(token));
            dispatch({
              type: LOGIN,
              payload: {
                token,
                user,
              },
            });
          });
      },
    });

  const logout = () => {
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/dj-rest-auth/logout/",
      headers: {
        Authorization: `Bearer ${authState.token}`,
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then((res) => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        dispatch({
          type: LOGOUT,
        });
      })
      .catch((res) => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        dispatch({
          type: LOGOUT,
        });
      });
  };
  return {
    authState,
    login: useLoginWithGoogle,
    logout,
  };
};
