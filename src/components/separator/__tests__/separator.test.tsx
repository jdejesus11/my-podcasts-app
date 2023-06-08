import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Separator from "../separator";

describe("<Separator />", () => {
  describe("should render a separator", () => {
    it("when users select to see the detail of a podcast ", () => {
      render(<Separator />);
    });
  });
});
