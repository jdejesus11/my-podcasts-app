import TextField from "../text-input";
import { fireEvent, render, screen } from "@testing-library/react";
import { TextInputProps } from "../text-input";
import React from "react";
import "@testing-library/jest-dom";

describe("<TextInput />", () => {
  let props: TextInputProps;
  let onChangeMock: jest.Mock;

  beforeEach(() => {
    onChangeMock = jest.fn();
  });

  describe("should render a text input", () => {
    it("when users do not type in anything", () => {
      props = {
        placeholder: "Filter podcasts...",
        onChange: () => onChangeMock(),
        ariaLabel: "filter podcasts",
      };
      render(<TextField {...props} />);
      const input = screen.getByPlaceholderText(props.placeholder);
      expect(input).toBeInTheDocument();
    });
  });
  describe("should render a text field with characters", () => {
    it("when users do type in a letter", () => {
      props = {
        placeholder: "Filter podcasts...",
        onChange: () => onChangeMock(),
        ariaLabel: "filter podcasts",
      };
      render(<TextField {...props} />);
      const input = screen.getByPlaceholderText(props.placeholder);
      expect(input).toBeInTheDocument();
      fireEvent.change(input, { target: { value: "a" } });
      expect(onChangeMock).toBeCalledTimes(1);
    });
  });
});
