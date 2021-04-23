import { render, screen } from "../../utils/test-utils";
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
        <table>
          <tbody>
            <UserRow user={user} />
          </tbody>
        </table>
      );
    });

    test("the user's id", () => {
      const id = screen.getByText("0");
      expect(id).toHaveTextContent("0");
    });

    test("the user's name", () => {
      const name = screen.getByText("Test User");
      expect(name).toHaveTextContent("Test User");
    });

    test("the user's email", () => {
      const email = screen.getByText("test@aa.io");
      expect(email).toHaveTextContent("test@aa.io");
    });
  });
});
