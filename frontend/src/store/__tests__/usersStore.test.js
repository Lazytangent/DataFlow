import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

import usersReducer, * as userActions from "../users";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const users = [
  {
    id: 1,
    name: "Test User",
    email: "test@aa.io",
  },
  {
    id: 2,
    name: "UserTest",
    email: "test@user.io",
  },
];

// Defining types here since they don't get exported
const SET_USERS = "users/SET_USERS";

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates SET_USERS when fetching users has been done", () => {
    fetchMock.getOnce("/api/users", {
      body: users,
      headers: { "Content-Type": "application/json" },
    });

    const expectedActions = [{ type: SET_USERS, users }];
    const store = mockStore({ users: {} });

    return store.dispatch(userActions.getUsers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("usersReducer", () => {
  it("should return the initial state", () => {
    expect(usersReducer(undefined, {})).toEqual({});
  });

  it("should handle SET_USERS", () => {
    expect(
      usersReducer(
        {},
        {
          type: SET_USERS,
          users,
        }
      )
    ).toEqual({
      1: users[0],
      2: users[1],
    });
  });
});
