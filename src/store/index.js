// store file to combine the reducers
import { combineReducers } from "redux";
import clicksReducer from "./clicksReducer";

const reducers = combineReducers({
  clicks: clicksReducer,
});

export default reducers;
