import * as React from "react";
import {
  createBrowserRouter
} from "react-router-dom";
import App from "./src/App";
import EpisodeDetailContainer from "./src/container/episode-detail-container/episode-detail-container";
import Episode from "./src/container/episode/episode";
import Podcast from "./src/container/podcast/podcast";
import Podcasts from "./src/container/podcasts/podcasts";

export default createBrowserRouter([
    {
      element: <App />,
      path:"",
      children: [
        {
          element: <Podcasts />,
          path: "/"
        },
        {
          element: <Podcast />,
          path: "podcasts/:podcastId",
          children:[
            {
              element: <Episode />,
              path: ""
            },
            {
              element: <EpisodeDetailContainer />,
              path: "episodes/:episodeId"
            }
          ]
        }
      ]
    },
]);