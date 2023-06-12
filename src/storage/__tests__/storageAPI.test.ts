import { listOfEpisodes, listOfPodcasts } from "../../helpers/data";
import { PODCASTS_STORAGE_KEY, fetchDataWithStorage, saveData } from "../storageAPI";

import localStorageMock from "../../../mocks/localStorageMock";
import { toStorageFormat } from "../../helpers/helpers";
import { Episode, Podcast } from "../../models/models";

describe("Storage API", () => {
  const setItemMocked = jest.fn();
  let fetchDataMocked: jest.Mock<Promise<Podcast[] | Episode[]>>;
  let getItemMocked: jest.Mock<string>;
  let getItemNoDataMocked: jest.Mock<string>;
  let afterCallbackMocked: jest.Mock<Podcast[] | Episode[]>;
  const storageKey = PODCASTS_STORAGE_KEY;

  describe("Podcasts List", () => {
    beforeEach(() => {
      Object.defineProperty(window, "localStorage", { value: localStorageMock });
      window.localStorage.setItem = setItemMocked;
      fetchDataMocked = jest.fn(() => Promise.resolve(listOfPodcasts));
      getItemMocked = jest.fn(() => toStorageFormat(listOfPodcasts));
      afterCallbackMocked = jest.fn(() => listOfPodcasts);
      getItemNoDataMocked = jest.fn(() => undefined);
    });

    afterEach(() => {
      window.localStorage.clear();
    });
    it("should save a list of podcasts", async () => {
      const storagedData = await saveData(storageKey, fetchDataMocked);
      expect(fetchDataMocked).toHaveBeenCalledTimes(1);
      expect(storagedData).toEqual(listOfPodcasts);
      expect(setItemMocked).toHaveBeenCalled();
    });

    it("should retrieve a list of podcasts from the local storage when less than 24 houras has passed by", async () => {
      window.localStorage.getItem = getItemMocked;
      const storagedData = await fetchDataWithStorage(storageKey, fetchDataMocked, afterCallbackMocked);
      expect(fetchDataMocked).not.toHaveBeenCalled;
      expect(storagedData).toEqual(listOfPodcasts);
      expect(getItemMocked).toHaveBeenCalled();
      expect(afterCallbackMocked).toHaveBeenCalled();
    });

    it("should retrieve a list of podcasts from the service when less than 24 houras has passed by", async () => {
      window.localStorage.getItem = getItemNoDataMocked;
      const storagedData = await fetchDataWithStorage(storageKey, fetchDataMocked, afterCallbackMocked);
      expect(fetchDataMocked).toHaveBeenCalled;
      expect(storagedData).toEqual(listOfPodcasts);
      expect(getItemNoDataMocked).toHaveBeenCalled();
      expect(afterCallbackMocked).not.toHaveBeenCalled();
    });
  });

  describe("Podcasts Detail", () => {
    const podcastId = "908837261";
    beforeEach(() => {
      Object.defineProperty(window, "localStorage", { value: localStorageMock });
      window.localStorage.setItem = setItemMocked;
      fetchDataMocked = jest.fn(() => Promise.resolve(listOfEpisodes));
      getItemMocked = jest.fn(() => toStorageFormat(listOfEpisodes));
      afterCallbackMocked = jest.fn(() => listOfEpisodes);
      getItemNoDataMocked = jest.fn(() => undefined);
    });

    afterEach(() => {
      window.localStorage.clear();
    });
    it("should save a podcast detail", async () => {
      const storagedData = await saveData(podcastId, fetchDataMocked);
      expect(fetchDataMocked).toHaveBeenCalledTimes(1);
      expect(storagedData).toEqual(listOfEpisodes);
      expect(setItemMocked).toHaveBeenCalled();
    });

    it("should retrieve a podcast detail from the local storage when less than 24 houras has passed by", async () => {
      window.localStorage.getItem = getItemMocked;
      const storagedData = await fetchDataWithStorage(podcastId, fetchDataMocked, afterCallbackMocked);
      expect(fetchDataMocked).not.toHaveBeenCalled;
      expect(storagedData).toEqual(listOfEpisodes);
      expect(getItemMocked).toHaveBeenCalled();
      expect(afterCallbackMocked).toHaveBeenCalled();
    });

    it("should retrieve a podcast detail from the service when less than 24 houras has passed by", async () => {
      window.localStorage.getItem = getItemNoDataMocked;
      const storagedData = await fetchDataWithStorage(podcastId, fetchDataMocked, afterCallbackMocked);
      expect(fetchDataMocked).toHaveBeenCalled;
      expect(storagedData).toEqual(listOfEpisodes);
      expect(getItemNoDataMocked).toHaveBeenCalled();
      expect(afterCallbackMocked).not.toHaveBeenCalled();
    });
  });
});
