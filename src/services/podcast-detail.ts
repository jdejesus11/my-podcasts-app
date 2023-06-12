import { EpisodeType, ResponseType } from "../models/models";

export const fetchPodcastDetailService = async (podcastId: string) => {
  try {
    const PODCAST_DETAIL_URL = `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast &entity=podcastEpisode&limit=20`
    )}`;
    const response = await fetch(PODCAST_DETAIL_URL);
    if (!response.ok) {
      throw new Error(response.status.toString());
    }
    const results: ResponseType = await response.json();
    return JSON.parse(results.contents) as EpisodeType;
  } catch (error) {
    console.log(error);
    return Promise.reject([]);
  }
};
