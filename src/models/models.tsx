export interface Multimedia {
    id:string,
    title: string;
    description?: string;
    author?: string;
}

export interface Podcast extends Multimedia {
    thumbnailAlt?: string,
    thumbnailURL?: string
}

export interface Episode extends Multimedia {
    date?: string;
    duration?: string;
    audioURL?: string,
    episodeFileExtension?: string
}