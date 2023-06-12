import { listOfEpisodesAPI } from "../../helpers/data";
import { fetchPodcastDetailService } from "../podcast-detail";

describe("Podcast Detail Service", () => {
  let fetchMock: jest.Mock;
  const responseMock = {
    results: listOfEpisodesAPI,
  };
  describe("should return the detail of a podcast", () => {
    beforeAll(() => {
      fetchMock = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ contents: JSON.stringify(responseMock) }),
        })
      );
      global.fetch = fetchMock;
    });

    afterAll(() => {
      fetchMock.mockClear();
    });

    it("if there is no HTTP errors", async () => {
      const podcasts = await fetchPodcastDetailService("982123123");
      expect(podcasts).toEqual(responseMock);
    });
  });
  describe("should no return the detail of a podcast", () => {
    beforeAll(() => {
      fetchMock = jest.fn(() =>
        Promise.resolve({
          ok: false,
          status: "Error",
        })
      );
      global.fetch = fetchMock;
    });

    afterAll(() => {
      fetchMock.mockClear();
    });

    it("if a HTTP error occurs", async () => {
      await expect(fetchPodcastDetailService("982123123")).rejects.toEqual([]);
    });
  });
});
