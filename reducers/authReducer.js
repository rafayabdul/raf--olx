import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { AUTH } from "../actions/constant";

const initialAuthState = {
  authToken: ( localStorage.getItem("authToken") ) ?  localStorage.getItem("authToken") : undefined,
  userAuthenticates: ( localStorage.getItem("userAuthenticates") === "true" ) ? true : false,
  id: (localStorage.getItem("id") )  ? localStorage.getItem("id") : undefined,
  user: (localStorage.getItem("user") )  ? JSON.parse(localStorage.getItem("user")) : [],
};

export const authReducer = persistReducer(
    { storage, key: "aimad-auth", whitelist: [ "authToken"] },
    (state = initialAuthState, action) => {
      switch (action.type) {
        case AUTH.LOGIN_USER: {
          localStorage.removeItem("authToken");
          localStorage.removeItem("userAuthenticates");
          localStorage.removeItem("id");
          localStorage.removeItem("user");
          
          return {
            ...state,
            userType: undefined,
            authToken: undefined,
            userAuthenticates: false,
            id: undefined,
            user: [],
          };
        }
        case AUTH.USER: {
          return {
            ...state,
            authToken: action.payload.authToken,
            userAuthenticates: action.payload.userAuthenticates,
            id: action.payload.id,
            user: action.payload.user
          };
        }

        case AUTH.LOGOUT_USER: {
          localStorage.removeItem("userType");
          localStorage.removeItem("authToken");
          localStorage.removeItem("userAuthenticates");
          localStorage.removeItem("id");
          localStorage.removeItem("user");
          return {
              userType: undefined,
              authToken: undefined,
              userAuthenticates: false,
              id: undefined,
              user: [],
            };
        }

        default:
          return state;
      }
    }
);
 