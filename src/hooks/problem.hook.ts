import { useEffect } from "react";
import { problemService } from "../services/problem.service";
import { ProblemModelResponse } from "../types/response.type";
import { UpdateProblemDto } from "../dto/problem.dto";
import {
    UseQueryOptions,
    useQuery,
    useMutation,
} from "react-query";
import { useProblemStore } from "../store/zustand/problem.zustand";

const PROBLEM_QUERY_KEY = "problem";

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

    const updateProblemMutation = useMutation(async (updateProblemRequest: UpdateProblemDto) => {
        return await problemService.updateProblem(problemId, updateProblemRequest);
    });

    return {
        problem,
        isLoading,
        error,
        updateProblemMutation,
    };
};