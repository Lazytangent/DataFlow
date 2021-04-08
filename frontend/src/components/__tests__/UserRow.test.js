import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import configureStore from "../../store";
import UserRow from "../UserRow";

const store = configureStore();

describe("The UserRow component", () => {
  describe("renders", () => {
    beforeEach(() => {
      const user = {
        id: 0,
        name: "Test User",
        email: "test@aa.io",
      };

      render(
        <Provider store={store}>
          <table>
            <tbody>
              <UserRow user={user} />
            </tbody>
          </table>
        </Provider>
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
