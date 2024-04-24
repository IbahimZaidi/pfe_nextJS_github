"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import build from "next/dist/build";

// function read the table :
export const getDataFromSoutenanceHab = createAsyncThunk(
  "soutencanceHa",
  async () => {
    const response = await fetch(
      "http://localhost:3000/api/soutenances/soutHabiliter"
    );
    const result = await response.json();
    return result.infoHabGlobalTable; // Return the data to be used to update the state
  }
);

// function read the table :
export const getDataFromSoutenanceHabID = createAsyncThunk(
  "soutencanceHa/hello",
  async (id) => {
    const response = await fetch(
      `http://localhost:3000/api/soutenances/soutHabiliter/${id}`
    );
    const result = await response.json();
    return result; // Return the data to be used to update the state
  }
);

const initialState = {
  testTable: [100, 200, 300],
  theDataGlobalHa: [],
  theDataIdHa: [],
  isLoading: false,
};

const souhaeSlice = createSlice({
  name: "souHa",
  initialState,
  reducers: {
    // // you can only return a new state or not return anything
    // returnLengthTable: (state) => {
    //   return state.laboTable.length;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataFromSoutenanceHab.pending, (state) => {
        state.isLoading = true;
        // console.log("@@@@@@@@@@@@@@@@@@@@@@ pending : ");
      })
      .addCase(getDataFromSoutenanceHab.fulfilled, (state, action) => {
        state.isLoading = false;
        state.theDataGlobalHa = action.payload;
        // console.log("@@@@@@@@@@@@@@@@@@@@@@ succeffully : ", action.payload);
      })
      .addCase(getDataFromSoutenanceHab.rejected, (state) => {
        state.isLoading = false;
        // console.log("@@@@@@@@@@@@@@@@@@@@@@ Error : ");
      });

    builder.addCase(getDataFromSoutenanceHabID.fulfilled, (state, action) => {
      state.theDataIdHa = action.payload;
    });
  },
});

// export the functions in the slices :

// export const { returnLengthTable } = laboSlice.actions;
// export the Reducer slice :
export default souhaeSlice.reducer;
