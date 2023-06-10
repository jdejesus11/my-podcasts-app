import { Episode, EpisodeType, Kind, Podcast, PodcastType } from "../models/models";
import { toDate, toMinutesAndSecods } from "./helpers";

export const fromContentToPodcasts = (data: PodcastType) => {
  return data.results.map((item) => {
    return {
      id: item.trackId,
      author: item.artistName,
      title: item.collectionName,
    } as Podcast;
  });
};

export const fromContentToEpisodes = (data: EpisodeType) => {
  return data.results.map((item) => {
    if (item.kind === Kind.podcast){
      return {
        id: item.trackId,
        title: "trackName" in item ? item.trackName : null,
        author: "artistName" in item ? item.artistName : null
      }
    }

    return {
      id: item.trackId,
      description: item.trackName,
      duration: toMinutesAndSecods(item.trackTimeMillis ?? 0),
      date: item.releaseDate ? toDate(item.releaseDate) : null,
    } as Episode;
  });
};
