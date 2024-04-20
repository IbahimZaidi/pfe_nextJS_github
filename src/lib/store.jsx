"use client";

import { configureStore } from "@reduxjs/toolkit";
import laboSlice from "./features/laboSlice/laboSlice";
import equipeSlice from "./features/equipeSlice/equipeSlice";
export const store = () => {
  return configureStore({
    reducer: {
      labo: laboSlice,
      equipes: equipeSlice,
    },
  });
};
