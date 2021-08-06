// this is an initial reducer for the project

import { ADD_COUNT, REDUCE_COUNT } from "../utilities/types";

const initialState = {
  clicks: 0,
};

const clicksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      // add 1 to state
      state = { ...state, clicks: state.clicks + 1 };
      return state;
    case REDUCE_COUNT:
      // take 1 from state
      state = { ...state, clicks: state.clicks - 1 };
      return state;
    default:
      return state;
  }
};

export default clicksReducer;
