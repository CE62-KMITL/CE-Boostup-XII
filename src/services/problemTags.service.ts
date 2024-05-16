import { apiController } from "../controllers/api.controller";
import { UpdateProblemTagDto, CreateProblemTagDto } from "../dto/problemTags.dto";
import { PaginationModelResponse, ProblemModelResponse } from "../types/response.type";
import { PaginationRequestDto } from "../dto/utils.dto";

export const problemTagsService = {
    getProblemTags: async (paginationRequest: PaginationRequestDto): Promise<PaginationModelResponse<ProblemModelResponse>> => {
        return await apiController("/problem-tags", "get", undefined, paginationRequest);
    },
    getProblemTag: async (id: string): Promise<ProblemModelResponse> => {
        return await apiController(`/problem-tags/${id}`, "get");
    },
    updateProblemTag: async (id: string, updateProblemTagRequest: UpdateProblemTagDto): Promise<ProblemModelResponse> => {
        return await apiController(`/problem-tags/${id}`, "patch", updateProblemTagRequest);
    },
    deleteProblemTag: async (id: string): Promise<ProblemModelResponse> => {
        return await apiController(`/problem-tags/${id}`, "delete");
    },
    createProblemTag: async (createProblemTagRequest: CreateProblemTagDto): Promise<ProblemModelResponse> => {
        return await apiController("/problem-tags", "post", createProblemTagRequest);
    }
};