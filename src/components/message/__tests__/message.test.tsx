import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Message from "../message";

describe("<Message />", () => {
  describe("should render a message", () => {
    it("when users makes a request and it went wrong", () => {
      const message = "ERROR 500";
      render(<Message content={message} />);
      const node = screen.getByText(message);
      expect(node).toBeInTheDocument();
    });
  });
});
