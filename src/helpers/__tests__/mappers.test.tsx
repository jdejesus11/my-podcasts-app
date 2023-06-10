import { EpisodeType, Kind, PodcastType } from "../../models/models";
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
      expect(response.results[0].trackId).toEqual(podcasts[0].id)
      expect(response.results[0].artistName).toEqual(podcasts[0].author)
      expect(response.results[0].collectionName).toEqual(podcasts[0].title)
    });
  });

  describe("Podcast Detail", () => {
    it("should maps podcast detail retrieved from the server to podcast detail list", () => {
      const response: EpisodeType = {
        results: [
          {
            kind: Kind["podcast-episode"],
            trackId: "90123123",
            trackName: "Love is love",
            artistName: "Sasha Tran",
            trackTimeMillis: 6000
          },
        ],
      };
      const podcasts = fromContentToEpisodes(response);
      expect(podcasts.length).toBe(response.results.length);
      expect(response.results[0].trackId).toEqual(podcasts[0].id)
      expect(response.results[0].trackName).toEqual(podcasts[0].description)
      expect(podcasts[0].duration).toEqual("0:06")
    });
  });
});
