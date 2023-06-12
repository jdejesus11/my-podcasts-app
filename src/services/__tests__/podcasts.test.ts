import { listOfPodcastsAPI } from "../../helpers/data";
import { fetchMostRelevantPodcastService } from "../podcasts";

describe("Podcast Services", () => {
  let fetchMock: jest.Mock;
  const responseMock = {
    results: listOfPodcastsAPI,
  };
  describe("should return the most important podcasts", () => {
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
      const podcasts = await fetchMostRelevantPodcastService();
      expect(podcasts).toEqual(responseMock);
    });
  });
  describe("should no return the most important podcasts", () => {
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
      await expect(fetchMostRelevantPodcastService()).rejects.toEqual([]);
    });
  });
});
