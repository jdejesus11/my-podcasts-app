import React from "react";
import EpisodeDetail, { EpisodeDetailProps } from "../episode-detail";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NO_AVAILABLE } from "../../../helpers/constants";
import { listOfEpisodes } from "../../../helpers/data";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("<Episode detail />", () => {
  let props: EpisodeDetailProps;
  describe("should render a detail of a episode", () => {
    describe("when users select an episode from the data grid", () => {
      it("and there are no description and audio", () => {
        props = {
          episode: listOfEpisodes[0],
        };
        render(<EpisodeDetail {...props} />);
        const component = screen.getByText(`${props.episode.title}`);
        expect(component).toBeInTheDocument();

        const titleNode = screen.getByText(props.episode.title);
        expect(titleNode).toBeInTheDocument();
        fireEvent.click(titleNode);
        expect(mockedUsedNavigate).toHaveBeenCalled();

        const descriptionNOde = screen.getByText(NO_AVAILABLE);
        expect(descriptionNOde).toBeInTheDocument();
      });

      it("and there are an id, title, description and audio", () => {
        props = {
          episode: {
            id: "1",
            title: "Episode 1",
            description: "Lorep Ipsum",
            audioURL: "www.google.com",
          },
        };
        render(<EpisodeDetail {...props} />);
        const component = screen.getByText(`${props.episode.title}`);
        expect(component).toBeInTheDocument();

        const titleNode = screen.getByText(props.episode.title);
        expect(titleNode).toBeInTheDocument();
        fireEvent.click(titleNode);
        expect(mockedUsedNavigate).toHaveBeenCalled();

        const descriptionNOde = screen.getByText(props.episode.description);
        expect(descriptionNOde).toBeInTheDocument();
      });
    });
  });
});
