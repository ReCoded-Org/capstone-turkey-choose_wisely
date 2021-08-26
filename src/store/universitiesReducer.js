import {
  FETCH_UNIVERSITIES,
  SEARCH_UNIVERSITIES,
  FILTER_UNIVERSITIES,
  LOADING,
} from "../utilities/types";

const initialState = {
  universities: [],
  loading: true,
};

const universitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      state.loading = true;
      return state;
    case FETCH_UNIVERSITIES:
      state = { ...state, universities: action.payload };
      state.loading = false;
      return state;
    case SEARCH_UNIVERSITIES:
      state = { ...state, universities: action.payload };
      state.loading = false;
      return state;
    case FILTER_UNIVERSITIES:
      // sort by name
      state.universities.sort(function (a, b) {
        const nameA = a.data.enName.toUpperCase();
        const nameB = b.data.enName.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

      state.loading = false;

      return state;
    default:
      return state;
  }
};

export default universitiesReducer;
