import { create } from "zustand";
import { ProblemModelResponse } from "../../types/response.type";

interface ProblemState {
    problem: ProblemModelResponse | null;
    setProblem: (problem: ProblemModelResponse) => void;
}

export const useProblemStore = create<ProblemState>((set) => ({
    problem: null,
    setProblem: (problem: ProblemModelResponse) => set({ problem }),
}));