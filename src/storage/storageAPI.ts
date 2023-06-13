import { getHourBetweenMiliseconds, toStorageFormat } from "../helpers/helpers";
import { fromContentToEpisodes, fromContentToPodcasts } from "../helpers/mappers";
import { Episode, EpisodeType, FormattedData, Podcast, PodcastType } from "../models/models";

export const PODCASTS_STORAGE_KEY = "podcasts";

export const LIMIT_IN_HOURS = 24;

/**
 * Save data in the browser -LocalStorage
 * @param storageKey key
 * @param fetchData promise or async func to retrieve data
 * @returns array of podcasts or episodes
 */
export async function saveData(storageKey: string, fetchData: () => Promise<Podcast[] | Episode[]>) {
  const data = await fetchData();
  if (!data || data.length === 0) return data;
  const storagedPodcasts = toStorageFormat(data);
  localStorage.setItem(storageKey, storagedPodcasts);
  return data;
}

/**
 * Retrieves information of a list of podcast from a service
 * and storages it in the localstorage
 * @param storageKey key
 * @param fetchData promise or async func to retrieve a podcast detail
 * @returns list of podcasts
 */
export async function fetchAndStoragePodcasts(storageKey: string, fetchData: () => Promise<PodcastType>) {
  const data = await fetchData();
  if (!data || data.results.length === 0) return;
  const podcasts = fromContentToPodcasts(data);
  const storagedPodcasts = toStorageFormat(podcasts);
  localStorage.setItem(storageKey, storagedPodcasts);
  return podcasts;
}

/**
 * Retrieves information of a podcast detail from a services
 * and storages it in the localstorage
 * @param storageKey key
 * @param fetchData promise or async func to retrieve a podcast detail
 * @returns podcast detail
 */
export async function fetchAndStoragePodcastDetail(storageKey: string, fetchData: () => Promise<EpisodeType>) {
  const data = await fetchData();
  if (!data || data.results.length === 0) return;
  const podcasts = fromContentToEpisodes(data);
  const storagedPodcasts = toStorageFormat(podcasts);
  localStorage.setItem(storageKey, storagedPodcasts);
  return podcasts;
}

/**
 * Retrieves data from the given services or the local storage
 * @param storageKey key
 * @param fetchData promise or async func to retrieve data
 * @param afterCallback  function to be executed if the data is retrieved from the local storage.
 * @returns
 */
export async function fetchDataWithStorage(
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

/**
 * Retrieves information from the localstorage given a key id
 * @param storageKey key
 * @returns podcast or podcast defailt with format {createdAt: Date, data: Podcast[] | PodcastDetail}
 */
export const fetchDataFromStorage = (storageKey: string): FormattedData | undefined => {
  const storagedData = localStorage.getItem(storageKey);
  if (!storagedData) return;
  const jsonData = JSON.parse(storagedData);
  if (!("createdAt" in jsonData) || !("data" in jsonData)) return;
  return jsonData;
};
