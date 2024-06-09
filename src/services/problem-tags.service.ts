import { apiController } from "../controllers/api.controller";
import { UpdateProblemTagDto, CreateProblemTagDto } from "../dto/problem-tags.dto";
import { PaginationModelResponse, ProblemTagModelResponse } from "../types/response.type";
import { PaginationRequestDto } from "../dto/utils.dto";

export const problemTagsService = {
    getProblemTags: async (paginationRequest: PaginationRequestDto): Promise<PaginationModelResponse<ProblemTagModelResponse>> => {
        return await apiController("/problem-tags", "get", undefined, paginationRequest);
    },
    getProblemTag: async (id: string): Promise<ProblemTagModelResponse> => {
        return await apiController(`/problem-tags/${id}`, "get");
    },
    updateProblemTag: async (id: string, updateProblemTagRequest: UpdateProblemTagDto): Promise<ProblemTagModelResponse> => {
        return await apiController(`/problem-tags/${id}`, "patch", updateProblemTagRequest);
    },
    deleteProblemTag: async (id: string): Promise<ProblemTagModelResponse> => {
        return await apiController(`/problem-tags/${id}`, "delete");
    },
    createProblemTag: async (createProblemTagRequest: CreateProblemTagDto): Promise<ProblemTagModelResponse> => {
        return await apiController("/problem-tags", "post", createProblemTagRequest);
    }
};