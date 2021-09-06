// store file to combine the reducers
import { combineReducers } from "redux";
import universitiesReducer from "./universitiesReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  universities: universitiesReducer,
  user: userReducer,
});

export default reducers;
