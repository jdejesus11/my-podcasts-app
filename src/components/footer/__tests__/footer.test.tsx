import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../footer";

describe("<Footer />", () => {
  describe("should render a footer", () => {
    it("when users open the app ", () => {
      render(<Footer />);
    });
  });
});