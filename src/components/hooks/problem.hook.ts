import { CreateProblemDto } from "../../dto/problem.dto";
import { problemService } from "../../services/problem.service";
import { setProblemState } from "../../store/slices/problem.slice";
import { PaginationRequestDto } from "../../dto/utils.dto";
import { useDispatch } from "react-redux";
import { ProblemModelResponse, PaginationModelResponse } from "../../types/response.type";
import { store } from "../../store/store";
import {
    UseQueryOptions,
    useMutation,
    useQuery,
    useQueryClient,
} from "react-query";
import { useEffect } from "react";

const PROBLEM_QUERY_KEY = "problems";

export const useProblem = (paginationRequest: PaginationRequestDto, options?: UseQueryOptions<PaginationModelResponse<ProblemModelResponse>>) => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();

    const fetchProblems = async (): Promise<PaginationModelResponse<ProblemModelResponse>> => {
        return await problemService.getProblems(paginationRequest);
    };
    
    const {
        data: problems,
        isLoading,
        error,
    } = useQuery<PaginationModelResponse<ProblemModelResponse>>(PROBLEM_QUERY_KEY, fetchProblems, {
        ...options,
        enabled: !!store.getState().problem.problem,
        refetchOnWindowFocus: false,
    });
    
    useEffect(() => {
        if (problems) 
            dispatch(setProblemState(problems.data));
    }, [problems, dispatch]);

    return {
        problems,
        isLoading,
        error,
    };
};