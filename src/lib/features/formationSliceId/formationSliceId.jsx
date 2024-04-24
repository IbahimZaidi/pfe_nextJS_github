"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// function read the table :
export const getDataFromFormationId = createAsyncThunk(
  "formation/fromationId",
  async (id) => {
    const response = await fetch(`http://localhost:3000/api/formation/${id}`);
    const result = await response.json(id);
    return result.formationIdRes; // Return the data to be used to update the state
  }
);

const initialState = {
  testTable: [100, 200, 300],
  theDataFormId: [],
  isLoading: false,
};

const fromIdSlice = createSlice({
  name: "formationId",
  initialState,
  reducers: {
    // // you can only return a new state or not return anything
    // returnLengthTable: (state) => {
    //   return state.laboTable.length;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataFromFormationId.pending, (state) => {
        state.isLoading = true;
        // console.log("@@@@@@@@@@@@@@@@@@@@@@ pending : ");
      })
      .addCase(getDataFromFormationId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.theDataFormId = action.payload;
        // console.log("@@@@@@@@@@@@@@@@@@@@@@ succeffully : ", action.payload);
      })
      .addCase(getDataFromFormationId.rejected, (state) => {
        state.isLoading = false;
        // console.log("@@@@@@@@@@@@@@@@@@@@@@ Error : ");
      });
  },
});

// export the functions in the slices :

// export const { returnLengthTable } = laboSlice.actions;
// export the Reducer slice :
export default fromIdSlice.reducer;
