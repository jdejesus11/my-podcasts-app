export interface PodcastAPI {
    wrapperType: string,
    kind: string,
    collectionId: string,
    trackId: string,
    artistName: string,
    collectionName: string,
    trackName: string,
    collectionCensoredName: string,
    trackCensoredName: string,
    collectionViewUrl: string,
    feedUrl: string,
    trackViewUrl: string,
    artworkUrl30: string,
    artworkUrl60: string,
    artworkUrl100: string,
    collectionPrice: number,
    trackPrice: number,
    releaseDate: string,
    collectionExplicitness: string,
    trackExplicitness: string,
    trackCount: string,
    trackTimeMillis: string,
    artworkUrl600: string,
    genres: string[],
    primaryGenreName: string
}

export type PodcastType = {
  results: Partial<PodcastAPI>[]
}

export interface ResponseType {
    contents: string
}

export interface Multimedia {
  id: string;
  title: string;
  description?: string;
  author?: string;
}

export interface Podcast extends Multimedia {
  thumbnailAlt?: string;
  thumbnailURL?: string;
}

export interface Episode extends Multimedia {
  date?: string;
  duration?: string;
  audioURL?: string;
  episodeFileExtension?: string;
}
