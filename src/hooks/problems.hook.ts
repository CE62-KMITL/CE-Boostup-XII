import { problemService } from "../services/problem.service";
import { ProblemModelResponse, PaginationModelResponse } from "../types/response.type";
import {
    UseQueryOptions,
    useQuery,
} from "react-query";
import { usePaginationRequestStore } from "../store/zustand/pagination.zustand";
import { useProblemsStore } from "../store/zustand/problems.zustand";
import { useEffect } from "react";
import { PublicationStatus } from "../enum/problem.enum";

const PROBLEM_QUERY_KEY = "problems";

export const useProblems = (options?: UseQueryOptions<PaginationModelResponse<ProblemModelResponse>>) => {
    const { paginationRequest } = usePaginationRequestStore();
    const { setProblems, isFetched, setIsFetched, setAllProblems, setTotalProblems, setPages } = useProblemsStore();

    const fetchProblems = async (): Promise<PaginationModelResponse<ProblemModelResponse>> => {
        const response = await problemService.getProblems(paginationRequest);
        setProblems(response.data);
        setTotalProblems(response.total);
        if (!isFetched) {
            setIsFetched(true);
            setAllProblems(response.data);
        }
        return response;
    };

    const fetchPublishedProblems = async (): Promise<PaginationModelResponse<ProblemModelResponse>> => {
        return await problemService.getProblems({ ...paginationRequest, publicationStatus: PublicationStatus.Published });
    }

    const {
        data: problems,
        isLoading,
        error,
    } = useQuery<PaginationModelResponse<ProblemModelResponse>>([PROBLEM_QUERY_KEY, paginationRequest], fetchProblems, {
        ...options,
        refetchOnWindowFocus: false,
    });

    const publishedProblemsQuery = useQuery<PaginationModelResponse<ProblemModelResponse>>([PROBLEM_QUERY_KEY], fetchPublishedProblems, {
        ...options,
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        if (problems){
            setPages(Math.ceil(problems.total / paginationRequest.perPage));
        }
    }, [problems]);

    return {
        problems,
        isLoading,
        error,
        publishedProblemsQuery,
    };
};