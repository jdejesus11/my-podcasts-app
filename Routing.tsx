import * as React from "react";
import {
  createBrowserRouter
} from "react-router-dom";
import App from "./src/App";
import Podcasts from "./src/container/podcasts/podcasts";

export default createBrowserRouter([
    {
      element: <App />,
      children: [
        {
          element: <Podcasts />,
          path: "/"
        }
      ]
    },
]);