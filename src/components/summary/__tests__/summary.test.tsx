import Summary, { SummaryProps } from "../summary";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { listOfPodcasts } from "../../../helpers/data";
import { NO_AVAILABLE, NO_IMAGE_ALT } from "../../../helpers/constants";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("<Summary />", () => {
  let props: SummaryProps;

  describe("should render a summary of a podcast", () => {
    describe("when users select to see its detail", () => {
      it("and the podcast has all its fields", () => {
        props = {
          podcast: listOfPodcasts[3],
        };
        render(<Summary {...props} />);
        const title = screen.getByText(props.podcast.title);
        expect(title).toBeInTheDocument();

        const author = screen.getByText(`By ${props.podcast.author}`);
        expect(author).toBeInTheDocument();

        const description = screen.getByText(props.podcast.description);
        expect(description).toBeInTheDocument();

        const altImage = screen.getByAltText(NO_IMAGE_ALT);
        expect(altImage).toBeInTheDocument();

        fireEvent.click(title);
        expect(mockedUsedNavigate).toHaveBeenCalled();
      });
      it("and the podcast does not have all its fields", () => {
        props = {
          podcast: listOfPodcasts[2],
        };
        render(<Summary {...props} />);
        const title = screen.getByText(props.podcast.title);
        expect(title).toBeInTheDocument();

        const author = screen.getByText(`By ${props.podcast.author}`);
        expect(author).toBeInTheDocument();

        const description = screen.getByText(NO_AVAILABLE);
        expect(description).toBeInTheDocument();

        const altImage = screen.getByAltText(NO_IMAGE_ALT);
        expect(altImage).toBeInTheDocument();

        fireEvent.click(title);
        expect(mockedUsedNavigate).toHaveBeenCalled();
      });
    });
  });
});
