import { LOGIN, LOGOUT } from "../utilities/types";

const initialState = {
  userInfo: {},
  isLoggedIn: false,
};

const universitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      state = { ...state, isLoggedIn: true };
      state = { ...state, userInfo: action.payload };
      return state;
    case LOGOUT:
      state = { ...state, isLoggedIn: false };
      state = { ...state, userInfo: {} };
      return state;
    default:
      return state;
  }
};

export default universitiesReducer;
