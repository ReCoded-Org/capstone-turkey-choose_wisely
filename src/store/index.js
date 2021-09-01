// store file to combine the reducers
import { combineReducers } from "redux";
import universitiesReducer from "./universitiesReducer";

const reducers = combineReducers({
  universities: universitiesReducer,
});

export default reducers;
