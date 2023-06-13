import { createListenerMiddleware } from "@reduxjs/toolkit";

const loggerMiddleware = createListenerMiddleware();

loggerMiddleware.startListening({
  predicate: () => {
    return true;
  },
  effect: async (action) => {
    console.log("ACTION: ", action.type);
  },
});

export default loggerMiddleware;
