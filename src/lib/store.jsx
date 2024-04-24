"use client";

import { configureStore } from "@reduxjs/toolkit";
import laboSlice from "./features/laboSlice/laboSlice";
import equipeSlice from "./features/equipeSlice/equipeSlice";
import southenanceSlice from "./features/soutenance_these/theseSlice";
import soutHabiSlice from "./features/soutenace_Habili_slice/habiliSlice";
import fromIdSlice from "./features/formationSliceId/formationSliceId";
export const store = () => {
  return configureStore({
    reducer: {
      labo: laboSlice,
      equipes: equipeSlice,
      souThe: southenanceSlice,
      souHa: soutHabiSlice,
      formationId: fromIdSlice,
    },
  });
};
