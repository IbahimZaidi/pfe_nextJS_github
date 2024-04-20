"use client";

import { configureStore } from "@reduxjs/toolkit";
import laboSlice from "./features/laboSlice/laboSlice";
export const store = () => {
  return configureStore({
    reducer: {
      labo: laboSlice,
    },
  });
};
