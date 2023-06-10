import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../header";
import { Provider } from "react-redux";
import store from "../../../store/store";


describe("<Header />", () => {
  describe("should render a header", () => {
    it("when users open the app ", () => {
      render(
        <Provider store={store}>
          <Header />
        </Provider>
      );
    });
  });
});
