import {
  FETCH_UNIVERSITIES,
  SEARCH_UNIVERSITIES,
  FILTER_UNIVERSITIES_BY_NAME,
  FILTER_UNIVERSITIES_BY_STATUS,
  FILTER_UNIVERSITIES_BY_TYPE,
  FILTER_UNIVERSITIES_BY_PROVINCE,
  UNDO_FILTER_UNIVERSITIES_BY_NAME,
  UNDO_FILTER_UNIVERSITIES_BY_TYPE,
  UNDO_FILTER_UNIVERSITIES_BY_PROVINCE,
  NOTFOUND,
  FOUND,
  LOADING,
} from "../utilities/types";

const initialState = {
  universities: [],
  loading: true,
  notFound: false,
};

const universitiesReducer = (state = initialState, action) => {
  let { universities } = state;
  let temp = universities;
  switch (action.type) {
    case LOADING:
      state.loading = true;
      return state;
    case NOTFOUND:
      state.notFound = true;
      return state;
    case FOUND:
      state.notFound = false;
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
      temp.sort(function (a, b) {
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
      state = { ...state, universities: temp };
      return state;
    case FILTER_UNIVERSITIES_BY_TYPE:
      // sort by type
      temp.sort(function (a, b) {
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
      state = { ...state, universities: temp };
      return state;
    case FILTER_UNIVERSITIES_BY_STATUS:
      // sort by type
      const temp_sub_true = temp.filter((uni) => uni.data.status !== false);
      const temp_sub_false = temp.filter((uni) => uni.data.status === false);
      temp = [...temp_sub_true, ...temp_sub_false];
      state.loading = false;
      state = { ...state, universities: temp };
      return state;
    case FILTER_UNIVERSITIES_BY_PROVINCE:
      // sort by type
      temp.sort(function (a, b) {
        const typeA = a.data.location.toUpperCase();
        const typeB = b.data.location.toUpperCase();
        if (typeA > typeB) {
          return -1;
        }
        if (typeA < typeB) {
          return 1;
        }
        return 0;
      });
      state.loading = false;
      state = { ...state, universities: temp };
      return state;
    case UNDO_FILTER_UNIVERSITIES_BY_NAME:
      // sort by name
      temp.sort(function (a, b) {
        const nameA = a.data.enName.toUpperCase();
        const nameB = b.data.enName.toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
      state.loading = false;
      state = { ...state, universities: temp };
      return state;

    case UNDO_FILTER_UNIVERSITIES_BY_TYPE:
      // sort by type
      temp.sort(function (a, b) {
        const typeA = a.data.enType.toUpperCase();
        const typeB = b.data.enType.toUpperCase();
        if (typeA < typeB) {
          return -1;
        }
        if (typeA > typeB) {
          return 1;
        }
        return 0;
      });
      state.loading = false;
      state = { ...state, universities: temp };
      return state;
    case UNDO_FILTER_UNIVERSITIES_BY_PROVINCE:
      // sort by type
      temp.sort(function (a, b) {
        const typeA = a.data.location.toUpperCase();
        const typeB = b.data.location.toUpperCase();
        if (typeA < typeB) {
          return -1;
        }
        if (typeA > typeB) {
          return 1;
        }
        return 0;
      });
      state.loading = false;
      state = { ...state, universities: temp };
      return state;
    default:
      return state;
  }
};

export default universitiesReducer;
