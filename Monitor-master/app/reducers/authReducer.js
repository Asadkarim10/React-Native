import { AUTH  } from "../actions/constant";

const  initialAuthState = {
    userType:  undefined ,
    authToken: undefined,
    userAuthenticates:  false,
    id:  undefined,
    user:  [],
};

export const authReducer = (state = initialAuthState, action) => {
      switch (action.type) {
        case AUTH.LOGIN_USER: {
          return {
            ...state,
            userType: ( action.payload.userType ) ?? undefined,
            authToken: ( action.payload.authToken ) ?? undefined,
            userAuthenticates: ( action.payload.userAuthenticates ) ??  false,
            id: ( action.payload.id ) ?? undefined,
            user: ( action.payload.user ) ?? [],
          };
        }

        case AUTH.USER: {
          return {
            ...state,
            userType: action.payload.userType,
            authToken: action.payload.authToken,
            userAuthenticates: action.payload.userAuthenticates,
            id: action.payload.id,
            user: action.payload.user
          };
        }
        case AUTH.LOGOUT_USER: {
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
    };
