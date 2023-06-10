import { Podcast, PodcastType } from "../models/models"

export const fromContentToPodcasts = (data: PodcastType) => {
    return data.results.map((item) => {
        return {
            id: item.trackId,
            author: item.artistName,
            title: item.collectionName
        } as Podcast
    })
}


