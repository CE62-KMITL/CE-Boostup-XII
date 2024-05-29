import { problemTagsService } from "../../services/problemTags.service";
import { setProblemTagState } from "../../store/slices/problemTags.slice";
import { PaginationRequestDto } from "../../dto/utils.dto";
import { useDispatch } from "react-redux";
import { ProblemTagModelResponse, PaginationModelResponse } from "../../types/response.type";
import { store } from "../../store/store";
import {
    UseQueryOptions,
    useMutation,
    useQuery,
    useQueryClient,
} from "react-query";
import { useEffect } from "react";

const PROBLEM_TAGS_QUERY_KEY = "problemTags";

export const useProblemsTags = (paginationRequest: PaginationRequestDto, options?: UseQueryOptions<PaginationModelResponse<ProblemTagModelResponse>>) => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();

    const fetchProblemTags = async (): Promise<PaginationModelResponse<ProblemTagModelResponse>> => {
        return await problemTagsService.getProblemTags(paginationRequest);
    };
    
    const {
        data: problemTags,
        isLoading,
        error,
    } = useQuery<PaginationModelResponse<ProblemTagModelResponse>>(PROBLEM_TAGS_QUERY_KEY, fetchProblemTags, {
        ...options,
        enabled: !!store.getState().problemTags.problemTags,
        refetchOnWindowFocus: false,
    });
    
    useEffect(() => {
        if (problemTags) 
            dispatch(setProblemTagState(problemTags.data));
    }, [problemTags, dispatch]);

    return {
        problemTags,
        isLoading,
        error,
    };
};