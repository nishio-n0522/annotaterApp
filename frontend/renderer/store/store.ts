import { configureStore, Store } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

const logger = createLogger({
  collapsed: true,
  diff: true,
});

export const store: Store = configureStore({
  reducer: {},
  middleware: [logger],
  devTools: true,
});
