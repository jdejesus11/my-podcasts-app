import { listOfPodcasts } from "../../helpers/data";
import { PODCASTS_STORAGE_KEY, retrieveData, saveData } from "../storageAPI";

import localStorageMock from "../../../mocks/localStorageMock";
import { toStorageFormat } from "../../helpers/helpers";
import { Episode, Podcast } from "../../models/models";

describe("Storage API", () => {
  const setItemMocked = jest.fn();
  let fetchDataMocked: jest.Mock<Promise<Podcast[] | Episode[]>>;
  let getItemMocked: jest.Mock<string>;
  let getItemNoDataMocked: jest.Mock<string>;
  let afterCallbackMocked: jest.Mock<Podcast[] | Episode[]>;

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

  describe("Storage API", () => {
    it("should save a list of podcasts", async () => {
      const storageKey = PODCASTS_STORAGE_KEY;
      const storagedData = await saveData(storageKey, fetchDataMocked);
      expect(fetchDataMocked).toHaveBeenCalledTimes(1);
      expect(storagedData).toEqual(listOfPodcasts);
      expect(setItemMocked).toHaveBeenCalled();
    });

    it("should retrieve a list of podcasts from the local storage when less than 24 houras has passed by", async () => {
      const storageKey = PODCASTS_STORAGE_KEY;
      window.localStorage.getItem = getItemMocked;
      const storagedData = await retrieveData(storageKey, fetchDataMocked, afterCallbackMocked);
      expect(fetchDataMocked).not.toHaveBeenCalled;
      expect(storagedData).toEqual(listOfPodcasts);
      expect(getItemMocked).toHaveBeenCalled();
      expect(afterCallbackMocked).toHaveBeenCalled();
    });

    it("should retrieve a list of podcasts from the service when less than 24 houras has passed by", async () => {
      const storageKey = PODCASTS_STORAGE_KEY;
      window.localStorage.getItem = getItemNoDataMocked;
      const storagedData = await retrieveData(storageKey, fetchDataMocked, afterCallbackMocked);
      expect(fetchDataMocked).toHaveBeenCalled;
      expect(storagedData).toEqual(listOfPodcasts);
      expect(getItemNoDataMocked).toHaveBeenCalled();
      expect(afterCallbackMocked).not.toHaveBeenCalled();
    });
  });
});
