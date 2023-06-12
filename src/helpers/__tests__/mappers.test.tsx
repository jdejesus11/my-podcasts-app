import { Episode, EpisodeType, PodcastAPI, PodcastType } from "../../models/models";
import { listOfEpisodesAPI } from "../data";
import { fromContentToEpisodes, fromContentToPodcasts } from "../mappers";

describe("Mappers", () => {
  describe("Podcasts", () => {
    it("should maps podcasts retrieved from the server to podcasts list", () => {
      const response: PodcastType = {
        results: [
          {
            trackId: "90123123",
            trackName: "Love is love",
            artistName: "Sasha Tran",
          },
        ],
      };
      const podcasts = fromContentToPodcasts(response);
      expect(podcasts.length).toBe(response.results.length);
      expect(response.results[0].trackId).toEqual(podcasts[0].id);
      expect(response.results[0].artistName).toEqual(podcasts[0].author);
      expect(response.results[0].collectionName).toEqual(podcasts[0].title);
    });
  });

  describe("Podcast Detail", () => {
    it("should maps podcast detail retrieved from the server to podcast detail list", () => {
      const response: EpisodeType = {
        results: listOfEpisodesAPI,
      };
      const podcasts = fromContentToEpisodes(response);
      expect(podcasts.length).toBe(response.results.length);

      expect(response.results[0].trackId).toEqual(podcasts[0].id);
      expect((response.results[0] as PodcastAPI).artistName).toEqual(podcasts[0].author);

      expect(response.results[1].trackId).toEqual(podcasts[1].id);
      expect(response.results[1].trackName).toEqual(podcasts[1].description);
      expect((podcasts[1] as Episode).duration).toEqual("0:06");
    });
  });
});
