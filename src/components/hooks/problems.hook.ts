import { problemService } from "../../services/problem.service";
import { ProblemModelResponse, PaginationModelResponse } from "../../types/response.type";
import {
    UseQueryOptions,
    useQuery,
} from "react-query";
import { usePaginationRequestStore } from "../../store/zustand/pagination.zustand";
import { useProblemsStore } from "../../store/zustand/problems.zustand";

const PROBLEM_QUERY_KEY = "problems";

export const useProblems = (options?: UseQueryOptions<PaginationModelResponse<ProblemModelResponse>>) => {
    const { paginationRequest } = usePaginationRequestStore();
    const { setProblems, isFetched, setIsFetched } = useProblemsStore();

    const fetchProblems = async (): Promise<PaginationModelResponse<ProblemModelResponse>> => {
        const response = await problemService.getProblems(paginationRequest);
        setProblems(response.data);
        if (!isFetched) 
            setIsFetched(true);
        return response;
    };

    const {
        data: problems,
        isLoading,
        error,
    } = useQuery<PaginationModelResponse<ProblemModelResponse>>([PROBLEM_QUERY_KEY, paginationRequest], fetchProblems, {
        ...options,
        refetchOnWindowFocus: false,
    });

    return {
        problems,
        isLoading,
        error,
    };
};