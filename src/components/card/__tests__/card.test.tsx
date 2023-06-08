import React from "react";
import Card, { CardProps } from "../card";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

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

      const altImage = screen.getByAltText("No Image");
      expect(altImage).toBeInTheDocument();
    });
  });
});
