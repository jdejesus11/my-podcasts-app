import React from "react";
import Card, { CardProps } from "../card";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NO_IMAGE_ALT } from "../../../helpers/constants";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("<Card />", () => {
  let props: CardProps;
  describe("should render a card", () => {
    it("when users search podcasts", () => {
      props = {
        podcast: {
          id: "1",
          title: "The Power of Love",
          author: "Celine Dion",
        },
      };
      render(<Card {...props} />);
      const title = screen.getByText(props.podcast.title);
      expect(title).toBeInTheDocument();

      const author = screen.getByText("Author: " + props.podcast.author);
      expect(author).toBeInTheDocument();

      const altImage = screen.getByAltText(NO_IMAGE_ALT);
      expect(altImage).toBeInTheDocument();

      fireEvent.click(title);
      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });
});
