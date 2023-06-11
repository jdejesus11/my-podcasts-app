import { FormattedData } from "../../models/models";
import { listOfPodcasts } from "../data";
import {
  fetchDataFromServer,
  filterPodcastsByTitleOrAuthor,
  getHourBetweenMiliseconds,
  isStringEmpty,
  toDate,
  toMinutesAndSecods,
  toStorageFormat,
} from "../helpers";

describe("Helpers", () => {
  describe("Dates", () => {
    it("should format dates to MM/DD/YYYY", () => {
      let date = "2019-04-24T03:23:00Z";
      let formattedDate = "04/23/2019";
      expect(toDate(date)).toEqual(formattedDate);

      date = "1988-12-24T13:00:00Z";
      formattedDate = "12/24/1988";
      expect(toDate(date)).toEqual(formattedDate);
    });
    it("should format dates from miliseconds to minutes and seconds", () => {
      let miliseconds = 600;
      let formatedTime = "0:01";
      expect(toMinutesAndSecods(miliseconds)).toEqual(formatedTime);

      miliseconds = 120000;
      formatedTime = "2:00";
      expect(toMinutesAndSecods(miliseconds)).toEqual(formatedTime);
    });
  });
  describe("Formats", () => {
    it("should format podcasts list to be saved into a local storage", () => {
      const podcasts = listOfPodcasts;
      const formattedPodcasts = JSON.parse(toStorageFormat(podcasts)) as FormattedData;
      expect(formattedPodcasts.data).toEqual(podcasts);
    });
    it("should calculate hours between two time in miliseconds", () => {
      let hours = getHourBetweenMiliseconds(3600000, 0);
      expect(hours).toBe(1);

      hours = getHourBetweenMiliseconds(86400000, 0);
      expect(hours).toBe(24);

      hours = getHourBetweenMiliseconds(0, 86400000);
      expect(hours).toBe(24);
    });
  });
  describe("Filtering", () => {
    it("should return a list of podcasts based on an author and a title", () => {
      const podcasts = listOfPodcasts;
      let query = "Andrea";
      let filteredPodcasts = filterPodcastsByTitleOrAuthor(podcasts, query);
      expect(filteredPodcasts.length).toBe(1);

      query = "Lorep Ipsum";
      filteredPodcasts = filterPodcastsByTitleOrAuthor(podcasts, query);
      expect(filteredPodcasts.length).toBe(2);
    });
  });
  describe("Validations", () => {
    it("should approve a non-empty string", () => {
      const string = "Lorep Ipsum";
      const isEmpty = isStringEmpty(string);
      expect(isEmpty).toBe(false);
    });
    it("should reject an empty string", () => {
      const string = "  ";
      const isEmpty = isStringEmpty(string);
      expect(isEmpty).toBe(true);
    });
    it("should rejects if hours is less than 24 hours", () => {
      const shouldFetchDataFromServer = fetchDataFromServer(23);
      expect(shouldFetchDataFromServer).toBe(false);
    });
    it("should approve if hours is greater than 24 hours", () => {
      const shouldFetchDataFromServer = fetchDataFromServer(25);
      expect(shouldFetchDataFromServer).toBe(true);
    });
  });
});
