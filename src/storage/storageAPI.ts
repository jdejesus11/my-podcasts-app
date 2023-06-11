import { getHourBetweenMiliseconds, toStorageFormat } from "../helpers/helpers";
import { Episode, Podcast } from "../models/models";

export const PODCASTS_STORAGE_KEY = "podcasts";

export const LIMIT_IN_HOURS = 24;

/**
 * Save data in the browser -LocalStorage
 * @param storageKey key
 * @param fetchData promise or async func to retrieve data
 * @returns array of podcasts or episodes
 */
export async function saveData(storageKey: string, fetchData: () => Promise<Podcast[]>) {
  const data = await fetchData();
  if (!data || data.length === 0) return data;
  const storagedPodcasts = toStorageFormat(data);
  localStorage.setItem(storageKey, storagedPodcasts);
  return data;
}

/**
 * Retrieves data from the given services or the local storage
 * @param storageKey key
 * @param fetchData promise or async func to retrieve data
 * @param afterCallback  function to be executed if the data is retrieved from the local storage.
 * @returns
 */
export async function retrieveData(
  storageKey: string,
  fetchData: () => Promise<Podcast[] | Episode[]>,
  afterCallback?: (data: Podcast[] | Episode[]) => void
) {
  const storagedData = localStorage.getItem(storageKey);
  if (!storagedData) {
    return saveData(storageKey, fetchData);
  }
  const parsedData = JSON.parse(storagedData);
  const { createdAt, data } = parsedData;
  const currentTime = Date.now();
  const hours = getHourBetweenMiliseconds(currentTime, createdAt);
  if (hours >= LIMIT_IN_HOURS) {
    return saveData(storageKey, fetchData);
  }

  return Promise.resolve(data as Podcast[]).then((data) => afterCallback(data));
}
