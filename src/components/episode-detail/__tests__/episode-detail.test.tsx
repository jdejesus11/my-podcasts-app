import React from "react";
import EpisodeDetail, { EpisodeDetailProps } from "../episode-detail";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useNavigate: () => mockedUsedNavigate
}));

describe("<Episode detail />", () => {
  let props: EpisodeDetailProps;
  describe("should render a detail of a episode", () => {
    it("when users select an episode", () => {
      props = {
        episode: {
          id: "1",
          title: "Episode 1",
        },
      };
      render(<EpisodeDetail {...props} />);
      const component = screen.getByText(`${props.episode.title}`);
      expect(component).toBeInTheDocument();
    });
  });
});
