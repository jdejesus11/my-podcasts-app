import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../header";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { APP_TITLE } from "../../../helpers/constants";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("<Header />", () => {
  describe("should render a header", () => {
    it("when users open the app ", () => {
      render(
        <Provider store={store}>
          <Header />
        </Provider>
      );
      const title = screen.getByText(APP_TITLE);
      expect(title).toBeInTheDocument();
      fireEvent.click(title);
      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });
});
