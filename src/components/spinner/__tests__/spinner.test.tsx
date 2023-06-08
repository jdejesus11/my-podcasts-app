import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Spinner from "../spinner";

describe("<Spinner />", () => {
  describe("should render a spinner", () => {
    it("when users navigate to other views ", () => {
      render(<Spinner />);
    });
  });
});
