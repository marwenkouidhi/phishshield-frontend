import { LOGIN, LOGOUT } from "./actionTypes";

export const initialAuthState = {
  isAuthenticated: localStorage.getItem("token") ? true : false,
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
};

export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: payload.user,
        token: payload.token,
      };

    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };
  }
};
