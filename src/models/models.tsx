export enum Kind {
  "podcast" = "podcast",
  "podcast-episode" = "podcast-episode"
}

export interface PodcastAPI {
    wrapperType: string,
    kind: Kind,
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
    trackTimeMillis: number,
    artworkUrl600: string,
    genres: string[],
    primaryGenreName: string
}

export interface EpisodeAPI {
  kind: Kind,
  episodeUrl: string,
  previewUrl: string,
  artworkUrl600:string,
  description: string,
  trackName: string,
  trackId: string,
  episodeContentType: string,
  trackViewUrl: string,
  trackTimeMillis: number,
  releaseDate: string
}

export type PodcastType = {
  results: Partial<PodcastAPI >[] 
}

export type EpisodeType = {
  results: Partial<EpisodeAPI | PodcastAPI>[]
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
