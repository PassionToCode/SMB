import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../features/authSlice";
import { contactSlice } from "../features/contactSlice";
import { createLogger } from "redux-logger";
import { combineReducers } from "redux";

const reducers = combineReducers({
  contact: contactSlice.reducer,
  auth: authSlice.reducer,
});

var log = createLogger();

export const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), log],
});
