import { useEffect } from "react";
import { problemService } from "../../services/problem.service";
import { ProblemModelResponse } from "../../types/response.type";
import {
    UseQueryOptions,
    useQuery,
} from "react-query";
import { create } from "zustand";

const PROBLEM_QUERY_KEY = "problem";


interface ProblemStore {
    problem: ProblemModelResponse | null;
    setProblem: (problem: ProblemModelResponse) => void;
}

export const useProblemStore = create<ProblemStore>((set) => ({ 
    problem: null,
    setProblem: (problem: ProblemModelResponse) => set({ problem }),
}));

export const useProblem = (problemId: string, options?: UseQueryOptions<ProblemModelResponse>) => {
    const { setProblem } = useProblemStore();

    const fetchProblem = async (): Promise<ProblemModelResponse> => {
        return await problemService.getProblem(problemId);
    };
        
    const {
        data: problem,
        isLoading,
        error,
    } = useQuery<ProblemModelResponse>(PROBLEM_QUERY_KEY, fetchProblem, {
        ...options,
        enabled: !!problemId,
        refetchOnWindowFocus: false,
    });
    
    useEffect(() => {
        if (problem)
            setProblem(problem);
    }, [problem, setProblem]);

    return {
        problem,
        isLoading,
        error,
    };
};