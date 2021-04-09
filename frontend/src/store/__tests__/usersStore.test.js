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

describe("The thunk", () => {
  beforeEach(() => {
    fetchMock.getOnce("/api/users", {
      body: users,
      headers: { "Content-Type": "application/json" },
    });
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it("should call GET /api/users at least once", () => {
    const store = mockStore({ users: {} });
    store.dispatch(userActions.getUsers()).then(() => {
      const result = fetchMock.called("/api/users");
      expect(result).toBe(true);
    });
  });

  it("should create SET_USERS when fetching users has been done", () => {
    const expectedActions = [{ type: SET_USERS, users }];
    const store = mockStore({ users: {} });

    return store.dispatch(userActions.getUsers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("The usersReducer", () => {
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
