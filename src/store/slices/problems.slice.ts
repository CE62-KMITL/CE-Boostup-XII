import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProblemModelResponse } from "../../types/response.type";

export interface ProblemAppState {
    problem: ProblemModelResponse[] | null;
}

const initialState: ProblemAppState = {
    problem: null,
};

export const problemSlice = createSlice({
    name: "problem",
    initialState,
    reducers: {
        setProblemState: (state, action: PayloadAction<ProblemModelResponse[]>) => {
            state.problem = action.payload;
        },
    },
});

export const {
    setProblemState,
} = problemSlice.actions;