"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// function read the table :
export const getDataFromLabo = createAsyncThunk("labo/laboData", async () => {
  const response = await fetch("http://localhost:3000/api/laboAndEqui");
  const result = await response.json();
  return result.laboTabl; // Return the data to be used to update the state
});

const initialState = {
  testTable: [100, 200, 300],
  theDataLabo: [],
  isLoading: false,
};

const laboSlice = createSlice({
  name: "labo",
  initialState,
  reducers: {
    // // you can only return a new state or not return anything
    // returnLengthTable: (state) => {
    //   return state.laboTable.length;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataFromLabo.pending, (state) => {
        state.isLoading = true;
        // console.log("@@@@@@@@@@@@@@@@@@@@@@ pending : ");
      })
      .addCase(getDataFromLabo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.theDataLabo = action.payload;
        // console.log("@@@@@@@@@@@@@@@@@@@@@@ succeffully : ", action.payload);
      })
      .addCase(getDataFromLabo.rejected, (state) => {
        state.isLoading = false;
        // console.log("@@@@@@@@@@@@@@@@@@@@@@ Error : ");
      });
  },
});

// export the functions in the slices :

// export const { returnLengthTable } = laboSlice.actions;
// export the Reducer slice :
export default laboSlice.reducer;
