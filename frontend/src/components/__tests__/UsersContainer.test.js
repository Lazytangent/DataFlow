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

    test("the test users", () => {
      const userOneId = screen.getByText("1");
      const userTwoId = screen.getByText("2");
      expect(userOneId).toHaveTextContent("1");
      expect(userTwoId).toHaveTextContent("2");
    });
  });

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
});
