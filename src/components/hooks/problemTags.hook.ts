import { problemTagsService } from "../../services/problemTags.service";
import { setProblemTagState } from "../../store/slices/problemTags.slice";
import { PaginationRequestDto } from "../../dto/utils.dto";
import { useDispatch } from "react-redux";
import { ProblemTagModelResponse, PaginationModelResponse } from "../../types/response.type";
import { store } from "../../store/store";
import {
    UseQueryOptions,
    useQuery,
} from "react-query";
import { useEffect } from "react";

const PROBLEM_TAGS_QUERY_KEY = "problemTags";
const initialPaginationRequest: PaginationRequestDto = {
    page: 1,
    perPage: 10,
    sort: "name",
};

export const useProblemsTags = (paginationRequest: PaginationRequestDto = initialPaginationRequest, options?: UseQueryOptions<PaginationModelResponse<ProblemTagModelResponse>>) => {
    const dispatch = useDispatch();
    const tagList = [["", "บทเรียน"]];

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
        if (problemTags) {
            dispatch(setProblemTagState(problemTags.data));
            problemTags.data.map((problemTag: ProblemTagModelResponse) => {
                tagList.push([problemTag.id, problemTag.name]);
            });
        }
    }, [problemTags, dispatch]);

    return {
        problemTags,
        isLoading,
        error,
        tagList
    };
};