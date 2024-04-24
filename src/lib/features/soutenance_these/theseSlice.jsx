"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import build from "next/dist/build";

// function read the table :
export const getDataFromSoutenance = createAsyncThunk(
  "soutencance",
  async () => {
    const response = await fetch(
      "http://localhost:3000/api/soutenances/soutThese"
    );
    const result = await response.json();
    return result.infoTheseGlobalTable; // Return the data to be used to update the state
  }
);

// function read the table :
export const getDataFromSoutenanceID = createAsyncThunk(
  "soutencance/hello",
  async (id) => {
    const response = await fetch(
      `http://localhost:3000/api/soutenances/soutThese/${id}`
    );
    const result = await response.json();
    return result; // Return the data to be used to update the state
  }
);

const initialState = {
  testTable: [100, 200, 300],
  theDataGlobal: [],
  theDataId: [],
  isLoading: false,
};

const southeSlice = createSlice({
  name: "souThe",
  initialState,
  reducers: {
    // // you can only return a new state or not return anything
    // returnLengthTable: (state) => {
    //   return state.laboTable.length;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataFromSoutenance.pending, (state) => {
        state.isLoading = true;
        // console.log("@@@@@@@@@@@@@@@@@@@@@@ pending : ");
      })
      .addCase(getDataFromSoutenance.fulfilled, (state, action) => {
        state.isLoading = false;
        state.theDataGlobal = action.payload;
        // console.log("@@@@@@@@@@@@@@@@@@@@@@ succeffully : ", action.payload);
      })
      .addCase(getDataFromSoutenance.rejected, (state) => {
        state.isLoading = false;
        // console.log("@@@@@@@@@@@@@@@@@@@@@@ Error : ");
      });

    builder.addCase(getDataFromSoutenanceID.fulfilled, (state, action) => {
      state.theDataId = action.payload;
      console.log("############# ", state.theDataId);
    });
  },
});

// export the functions in the slices :

// export const { returnLengthTable } = laboSlice.actions;
// export the Reducer slice :
export default southeSlice.reducer;
