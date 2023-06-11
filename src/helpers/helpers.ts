import moment from "moment";
import { Episode, Podcast } from "../models/models";

/**
 * Formats date in UTC (YYY-MM-DDTHH-MM-SSZ) to en-us time format MM/DD/YYYY
 * @param date
 * @returns
 */
export const toDate = (date: string): string => {
  return moment(date).format("MM/DD/YYYY");
};

/**
 * Formats miliseconds into MM:SS time format
 * @param millis time in miliseconds
 * @returns string
 */
export const toMinutesAndSecods = (millis: number) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (Number(seconds) < 10 ? "0" : "") + seconds;
};

/**
 * Calculates time diffferences in hours
 * @param firstMiliseconds time in miliseconds
 * @param secondMiliseconds time in miliseconds
 * @returns hours between them
 */
export const getHourBetweenMiliseconds = (firstMiliseconds: number, secondMiliseconds: number) => {
  const hours = Math.floor((firstMiliseconds - secondMiliseconds) / 3600000);
  return hours < 0 ? -1 * hours : hours;
};

/**
 * Determines if hours is greater than 24 hours
 * @param hours time in hours
 * @returns true or false
 */
export const fetchDataFromServer = (hours: number) => hours > 24;

/**
 * Determines if a value is empty or not
 * @param value string
 * @returns true or false
 */
export const isStringEmpty = (value?: string) => {
  return /^\s*$/.test(value);
};

/**
 * Formats list of podcasts or episodes
 * @param data list of podcast or episode
 * @returns JSON string with format { createdAt, data }
 */
export const toStorageFormat = (data: Podcast[] | Episode[]): string => {
  return JSON.stringify({ createdAt: Date.now(), data });
};

/**
 * Retrieves podcasts based on query's search result
 * @param data list of podcasts
 * @param query parameter to filter podcasts
 * @returns list of filtered podcasts
 */
export const filterPodcastsByTitleOrAuthor = (data: Podcast[], query: string) => {
  return data.filter((podcast) => podcast.title.toLowerCase().includes(query.toLowerCase()) || podcast.author.toLowerCase().includes(query.toLowerCase()));
};
