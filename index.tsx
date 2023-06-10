import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import App from "./src/App";
import store from "./src/store/store";
import Router from "./Routing";

const root = ReactDOM.createRoot(document.getElementById("container") as Element);

root.render(
  <Provider store={store}>
    <RouterProvider router={Router} />
  </Provider>
);