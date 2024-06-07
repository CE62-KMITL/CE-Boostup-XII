import { problemTagsService } from "../services/problem-tags.service";
import { setProblemTagState } from "../store/slices/problem-tags.slice";
import { PaginationRequestDto } from "../dto/utils.dto";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { ProblemTagModelResponse, PaginationModelResponse } from "../types/response.type";
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
    const dispatch = useAppDispatch();
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
        enabled: !!useAppSelector((state) => state.problemTags.problemTags) === false,
        refetchOnWindowFocus: false,
    });
    
    useEffect(() => {
        console.log(problemTags);
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