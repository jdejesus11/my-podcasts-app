import React from "react";
import CounterBar, { CounterBarProps } from "../counter-bar";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<Counter bar />", () => {
  let props: CounterBarProps;
  describe("should render a counter bar", () => {
    it("when users select to see the detail of a podcast", () => {
      props = {
        title: "Episodes: 66",
      };
      render(<CounterBar {...props} />);
      const component = screen.getByText(`${props.title}`);
      expect(component).toBeInTheDocument();
    });
  });
});
