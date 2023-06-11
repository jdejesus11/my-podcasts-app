import { Episode, EpisodeType, Kind, Podcast, PodcastType } from "../models/models";
import { toDate, toMinutesAndSecods } from "./helpers";

/**
 * Maps or converts service podcasts type to UI podcasts type
 * @param data Data returned from service
 * @returns List of podcast
 */
export const fromContentToPodcasts = (data: PodcastType) => {
  return data.results.map((item) => {
    return {
      id: item.trackId,
      author: item.artistName,
      title: item.collectionName,
      thumbnailURL: item.artworkUrl600,
    } as Podcast;
  });
};

/*
 * Maps or converts service episodes type to UI episodes type
 * @param data Data returned from service
 * @returns List of episodes
 */
export const fromContentToEpisodes = (data: EpisodeType) => {
  return data.results.map((item) => {
    if (item.kind === Kind.podcast) {
      return {
        id: item.trackId,
        title: "trackName" in item ? item.trackName : null,
        author: "artistName" in item ? item.artistName : null,
        thumbnailURL: "artworkUrl600" in item ? item.artworkUrl600 : null,
        description: "description" in item ? item.description : null,
      } as Podcast;
    }

    return {
      id: item.trackId,
      description: "description" in item ? item.description : null,
      duration: toMinutesAndSecods(item.trackTimeMillis ?? 0),
      date: item.releaseDate ? toDate(item.releaseDate) : null,
      title: item.trackName,
    } as Episode;
  });
};
