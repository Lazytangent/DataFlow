// Define Action Types as Constants
const SET_USERS = 'users/SET_USERS';

// Define Action Creators
const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

// Define Thunks
export const getUsers = () => async (dispatch) => {
  const res = await fetch("/api/users");
  const users = await res.json();
  dispatch(setUsers(users));
};

const initialState = {};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, ...Object.fromEntries(action.users.map((user) => [user.id, user])) };
    default:
      return state;
  }
};

export default usersReducer;
