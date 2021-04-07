// CONSTANTS
const SET_SEARCH = 'search/SET_SEARCH';

// ACTION CREATORS
export const setSearch = (query) => ({
  type: SET_SEARCH,
  query,
});

// INITIAL STATE
const initialState = {
  queryString: '',
};

// REDUCER
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return { ...state, queryString: action.query };
    default:
      return state;
  }
};

export default searchReducer;
