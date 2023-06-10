import { PodcastType, ResponseType } from "../models/models";

const PODCAST_URL = `https://api.allorigins.win/get?url=${encodeURIComponent("https://itunes.apple.com/search?media=podcast&limit=100&country=US&term=sasha")}`;

export const fetchMostRelevantPodcastService = async () => {
    try {
        const response = await fetch(PODCAST_URL);
        if (!response.ok){
            throw new Error(response.status.toString())
        }
        const results: ResponseType = await response.json();
        return JSON.parse(results.contents) as PodcastType;
    }
    catch(error){
        console.log(error)
        return Promise.reject([]);
    }
}