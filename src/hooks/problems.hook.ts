import { problemService } from "../services/problem.service";
import { ProblemModelResponse, PaginationModelResponse } from "../types/response.type";
import {
    UseQueryOptions,
    useQuery,
    useMutation,
} from "react-query";
import { usePaginationRequestStore } from "../store/zustand/pagination.zustand";
import { useProblemsStore } from "../store/zustand/problems.zustand";
import { useEffect } from "react";
import { PublicationStatus } from "../enum/problem.enum";
import { CreateProblemDto } from "../dto/problem.dto";

const PROBLEM_QUERY_KEY = "problems";

export const useProblems = (options?: UseQueryOptions<PaginationModelResponse<ProblemModelResponse>>) => {
    const { paginationRequest } = usePaginationRequestStore();
    const { setProblems, isFetched, setIsFetched, setAllProblems, setTotalProblems, setPages, problems: problemsStore, totalProblems, setPublishedProblems } = useProblemsStore();

    const fetchProblems = async (): Promise<PaginationModelResponse<ProblemModelResponse>> => {
        const response = await problemService.getProblems(paginationRequest);
        if (problemsStore && problemsStore.length < totalProblems)
            setProblems([...problemsStore, ...response.data]);
        else
            setProblems(response.data);
        setTotalProblems(response.total);
        if (!isFetched) {
            setIsFetched(true);
            setAllProblems(response.data);
        }
        return response;
    };

    const fetchPublishedProblems = async (): Promise<PaginationModelResponse<ProblemModelResponse>> => {
        return await problemService.getProblems({ ...paginationRequest, publicationStatus: PublicationStatus.Published, sort: "createdAt" });
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

    const createProblemMutation = useMutation(async (problemRequest: CreateProblemDto) => {
        return await problemService.createProblem(problemRequest);
    });

    useEffect(() => {
        if (publishedProblemsQuery.data)
            setPublishedProblems(publishedProblemsQuery.data.data);
    }, [publishedProblemsQuery.data]);

    useEffect(() => {
        if (problems)
            setPages(Math.ceil(problems.total / paginationRequest.perPage));
    }, [problems]);

    useEffect(() => {
        setProblems([]);
    }, []);

    return {
        problems,
        isLoading,
        error,
        publishedProblemsQuery,
        createProblemMutation,
    };
};