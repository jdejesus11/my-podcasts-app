import { EpisodeAPI, Kind, Podcast, PodcastAPI } from "../models/models";

export const listOfEpisodes = [
  {
    id: "1",
    title: "Amor para los dos",
    date: "10-10-2002",
    duration: "28:30",
  },
  {
    id: "1",
    title: "Como saber",
    date: "22-10-2002",
    duration: "03:30",
  },
  {
    id: "1",
    title: "Supervisor de tus sueños",
    date: "22-10-2002",
    duration: "03:30",
  },
  {
    id: "1",
    title: "Supervisor de tus sueños",
    date: "22-10-2002",
    duration: "03:30",
  },
  {
    id: "1",
    title: "Supervisor de tus sueños",
    date: "22-10-2002",
    duration: "03:30",
  },
  {
    id: "1",
    title: "Supervisor de tus sueños",
    date: "22-10-2002",
    duration: "03:30",
  },
  {
    id: "1",
    title: "Natalia Lafourcade - Hasta La raiz - Hasta la raiz",
    date: "22-10-2002",
    duration: "03:30",
  },
  {
    id: "1",
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
