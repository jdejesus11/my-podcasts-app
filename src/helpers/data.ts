import { EpisodeAPI, EpisodeType, Kind, Podcast, PodcastAPI } from "../models/models";

export const listOfEpisodes = [
  {
    id: "1",
    title: "Amor para los dos",
    date: "10-10-2002",
    duration: "28:30",
  },
  {
    id: "2",
    title: "Como saber",
    date: "22-10-2002",
    duration: "03:30",
  },
  {
    id: "3",
    title: "Episode 1",
    description: "Lorep Ipsum",
    audioURL: "www.google.com",
  },
  {
    id: "4",
    title: "Supervisor de tus sueños",
    date: "22-10-2002",
    duration: "03:30",
  },
  {
    id: "5",
    title: "Supervisor de tus sueños",
    date: "22-10-2002",
    duration: "03:30",
  },
  {
    id: "6",
    title: "Supervisor de tus sueños",
    date: "22-10-2002",
    duration: "03:30",
  },
  {
    id: "7",
    title: "Supervisor de tus sueños",
    date: "22-10-2002",
    duration: "03:30",
  },
  {
    id: "8",
    title: "Natalia Lafourcade - Hasta La raiz - Hasta la raiz",
    date: "22-10-2002",
    duration: "03:30",
  },
  {
    id: "9",
    title: "Supervisor de tus sueños",
    date: "22-10-2002",
    duration: "03:30",
  },
];

export const listOfPodcasts: Podcast[] = [
  {
    id: "1",
    title: "Lorep Ipsum",
    author: "Gabriel Lopez",
  },
  {
    id: "2",
    title: "Lorep Ipsum",
    author: "Andrea Martinez",
  },
  {
    id: "3",
    title: "This is love",
    author: "Sasha Tran",
  },
  {
    id: "1",
    title: "I'm Alive",
    author: "Celine Dione",
    description: "Lorem Ipsum es simplemente el texto de relleno",
  },
];

export const listOfEpisodesAPI: Partial<EpisodeAPI | PodcastAPI>[] = [
  {
    kind: Kind["podcast"],
    trackId: "90123123",
    trackName: "Love is love",
    artistName: "Sasha Love",
  },
  {
    kind: Kind["podcast-episode"],
    trackId: "90123123",
    trackName: "Love is love",
    description: "Love is love",
    trackTimeMillis: 6000,
  },
];

export const listOfPodcastsAPI: Partial<EpisodeAPI | PodcastAPI>[] = [
  {
    kind: Kind["podcast"],
    trackId: "90123123",
    trackName: "Love is love",
    artistName: "Sasha Love",
    description: "Lorep Ipsum is a text",
  },
  {
    kind: Kind["podcast"],
    trackId: "4323423523523",
    trackName: "Love is love",
    artistName: "Gwen Louren",
    description: "Lorep Ipsum is a text",
  },
];

export const episodeType: EpisodeType = {
  results: [
    ...listOfEpisodesAPI
  ]
}

export const podcastsType: EpisodeType = {
  results: [
    ...listOfPodcastsAPI
  ]
}
