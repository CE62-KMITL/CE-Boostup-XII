import { problemService } from "../../services/problem.service";
import { ProblemModelResponse } from "../../types/response.type";
import {
    UseQueryOptions,
    useQuery,
} from "react-query";

const PROBLEM_QUERY_KEY = "problem";

export const useProblem = (problemId: string, options?: UseQueryOptions<ProblemModelResponse>) => {
    const fetchProblem = async (): Promise<ProblemModelResponse> => {
        return await problemService.getProblem(problemId);
    };

    const {
        data: problem,
        isLoading,
        error,
    } = useQuery<ProblemModelResponse>(PROBLEM_QUERY_KEY, fetchProblem, {
        ...options,
        refetchOnWindowFocus: false,
    });

    return {
        problem,
        isLoading,
        error,
    };
};