import { create } from "zustand";
import { ProblemModelResponse } from "../../types/response.type";

interface ProblemState {
    problem: ProblemModelResponse | null;
    setProblem: (problem: ProblemModelResponse) => void;
    problemId: string | null;
    setProblemId: (problemId: string) => void;
}

export const useProblemStore = create<ProblemState>((set) => ({
    problem: null,
    setProblem: (problem: ProblemModelResponse) => set({ problem }),
    problemId: null,
    setProblemId: (problemId: string) => set({ problemId }),
}));