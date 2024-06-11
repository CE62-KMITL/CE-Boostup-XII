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

export const useProblem = (options?: UseQueryOptions<ProblemModelResponse>) => {
    const { setProblem, problemId } = useProblemStore();

    const fetchProblem = async (): Promise<ProblemModelResponse> => {
        return await problemService.getProblem(problemId as string);
    };

    const {
        data: problem,
        isLoading,
        error,
    } = useQuery<ProblemModelResponse>([PROBLEM_QUERY_KEY, problemId], fetchProblem, {
        ...options,
        enabled: !!problemId,
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        if (problem)
            setProblem(problem);
    }, [problem, setProblem]);

    const updateProblemMutation = useMutation(async (updateProblemRequest: UpdateProblemDto) => {
        return await problemService.updateProblem(problemId as string, updateProblemRequest);
    });

    const deleteProblemMutation = useMutation(async () => {
        return await problemService.deleteProblem(problemId as string);
    });

    return {
        problem,
        isLoading,
        error,
        updateProblemMutation,
        deleteProblemMutation,
    };
};