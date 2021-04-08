import { render, screen } from "@testing-library/react";
import UserRow from "../UserRow";

describe("The UserRow component", () => {
  describe("renders", () => {
    beforeEach(() => {
      const user = {
        id: 0,
        name: "Test User",
        email: "test@aa.io",
      };

      render(
        <UserRow user={user} />
      );
    });

    test("the user's id", () => {
      const id = screen.getByText("0");
      expect(id).toHaveTextContent("0");
    });
  });
});
