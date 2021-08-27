import {
  FETCH_UNIVERSITIES,
  SEARCH_UNIVERSITIES,
  FILTER_UNIVERSITIES_BY_NAME,
  FILTER_UNIVERSITIES_BY_STATUS,
  FILTER_UNIVERSITIES_BY_TYPE,
  FILTER_UNIVERSITIES_BY_PROVINCE,
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
    case FILTER_UNIVERSITIES_BY_NAME:
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
    case FILTER_UNIVERSITIES_BY_TYPE:
      // sort by type
      state.universities.sort(function (a, b) {
        const typeA = a.data.enType.toUpperCase();
        const typeB = b.data.enType.toUpperCase();
        if (typeA > typeB) {
          return -1;
        }
        if (typeA < typeB) {
          return 1;
        }
        return 0;
      });

      state.loading = false;

      return state;
    case FILTER_UNIVERSITIES_BY_STATUS:
      // sort by status
      // not existed yet

      state.loading = false;

      return state;

    case FILTER_UNIVERSITIES_BY_PROVINCE:
      // sort by status
      // not existed yet

      state.loading = false;

      return state;

    default:
      return state;
  }
};

export default universitiesReducer;
