import { create } from "zustand";
import { ProblemModelResponse } from "../../types/response.type";

interface ProblemsState {
    problems: ProblemModelResponse[] | null;
    allProblems: ProblemModelResponse[] | null;
    isFetched: boolean;
    setProblems: (problems: ProblemModelResponse[]) => void;
    setIsFetched: (isFetched: boolean) => void;
    setAllProblems: (problems: ProblemModelResponse[]) => void;
}

export const useProblemsStore = create<ProblemsState>((set) => ({
    problems: null,
    setProblems: (problems: ProblemModelResponse[]) => set({ problems }),
    isFetched: false,
    setIsFetched: (isFetched: boolean) => set({ isFetched }),
    allProblems: null,
    setAllProblems: (problems: ProblemModelResponse[]) => set({ allProblems: problems }),
}));