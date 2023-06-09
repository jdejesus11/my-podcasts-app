import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../header";

describe("<Header />", () => {
  describe("should render a header", () => {
    it("when users open the app ", () => {
      render(<Header />);
    });
  });
});
