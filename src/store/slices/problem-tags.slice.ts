import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProblemTagModelResponse } from "../../types/response.type";

export interface ProblemTagAppState {
  problemTags: ProblemTagModelResponse[] | null;
}

const initialState: ProblemTagAppState = {
  problemTags: null,
};

export const problemTagSlice = createSlice({
  name: "problemTags",
  initialState,
  reducers: {
    setProblemTagState: (state, action: PayloadAction<ProblemTagModelResponse[]>) => {
        state.problemTags = action.payload;
    },
  },
});

export const {
  setProblemTagState,
} = problemTagSlice.actions;