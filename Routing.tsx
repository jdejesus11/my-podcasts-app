import * as React from "react";
import {
  createBrowserRouter
} from "react-router-dom";
import App from "./src/App";

export default createBrowserRouter([
    {
      element: <App />,
      path: "/"
    },
]);