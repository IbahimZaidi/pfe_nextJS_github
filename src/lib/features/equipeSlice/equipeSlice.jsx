"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// function read the table :
export const getDataFromEquipes = createAsyncThunk(
  "equipes/laboData",
  async () => {
    const response = await fetch("http://localhost:3000/api/laboAndEqui");
    const result = await response.json();
    return result.equipeTabl; // Return the data to be used to update the state
  }
);

export const getDataFromIdEquipes = createAsyncThunk(
  "/equipes/idData",
  async (id) => {
    const response = await fetch(
      `http://localhost:3000/api/laboAndEqui/equipe/${id}`
    );

    const result = await response.json();

    return result;
  }
);

const initialState = {
  testTable: [100, 200, 300],
  theDataEqui: [],
  theDataEquiId: [],
  isLoading: false,
};

const equipesSlice = createSlice({
  name: "equipes",
  initialState,
  reducers: {
    // // you can only return a new state or not return anything
    // returnLengthTable: (state) => {
    //   return state.laboTable.length;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataFromEquipes.pending, (state) => {
        state.isLoading = true;
        // console.log("@@@@@@@@@@@@@@@@@@@@@@ pending : ");
      })
      .addCase(getDataFromEquipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.theDataEqui = action.payload;
        // console.log("@@@@@@@@@@@@@@@@@@@@@@ succeffully : ", action.payload);
      })
      .addCase(getDataFromEquipes.rejected, (state) => {
        state.isLoading = false;
        // console.log("@@@@@@@@@@@@@@@@@@@@@@ Error : ");
      });

    builder.addCase(getDataFromIdEquipes.fulfilled, (state, action) => {
      state.theDataEquiId = action.payload;
      console.log("############# ", state.theDataEquiId);
    });
  },
});

// export the functions in the slices :

// export const { returnLengthTable } = laboSlice.actions;
// export the Reducer slice :
export default equipesSlice.reducer;
