import { render, screen } from "../../utils/test-utils";
import fetchMock from "fetch-mock";

import UsersContainer from "../UsersContainer";

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

describe("The UsersContainer component", () => {
  describe("dispatches a thunk", () => {
    beforeEach(() => {
      fetchMock.getOnce("/api/users", {
        body: users,
        headers: { "Content-Type": "application/json" },
      });

      render(
        <UsersContainer />
      );
    });

    afterEach(() => {
      fetchMock.restore();
    });

    test("and calls the GET /api/users API route", () => {
      const result = fetchMock.called("/api/users");
      expect(result).toBe(true);
    });
  });

  describe("renders", () => {
    beforeEach(() => {
      fetchMock.getOnce("/api/users", {
        body: users,
        headers: { "Content-Type": "application/json" },
      });

      render(
        <UsersContainer />,
      );
    });

    afterEach(() => {
      fetchMock.restore();
    });

    test("the test users' ids", () => {
      const userOneId = screen.getByText("1");
      const userTwoId = screen.getByText("2");
      expect(userOneId).toHaveTextContent("1");
      expect(userTwoId).toHaveTextContent("2");
    });

    test("the test users' names", () => {
      const userOneName = screen.getByText("Test User");
      const userTwoName = screen.getByText("UserTest");
      expect(userOneName).toHaveTextContent("Test User");
      expect(userTwoName).toHaveTextContent("UserTest");
    });

    test("the test users' emails", () => {
      const userOneEmail = screen.getByText("test@aa.io");
      const userTwoEmail = screen.getByText("test@user.io");
      expect(userOneEmail).toHaveTextContent("test@aa.io");
      expect(userTwoEmail).toHaveTextContent("test@user.io");
    });
  });
});
