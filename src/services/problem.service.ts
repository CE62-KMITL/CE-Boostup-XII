import { apiController } from "../controllers/api.controller"
import { CreateProblemDto, UpdateProblemDto } from "../dto/problem.dto";
import { PaginationRequestDto } from "../dto/utils.dto";
import { ProblemModelResponse, PaginationModelResponse } from "../types/response.type";  

export const problemService = {
    getProblems: async (paginationRequest: PaginationRequestDto): Promise<PaginationModelResponse<ProblemModelResponse>> => {
        return await apiController("/problems", "get", undefined, paginationRequest);
    },
    getProblem: async (id: string): Promise<ProblemModelResponse> => {
        return await apiController(`/problems/${id}`, "get");
    },
    createProblem: async (createProblemRequest: CreateProblemDto): Promise<ProblemModelResponse> => {
        return await apiController("/problems", "post", createProblemRequest);
    },
    updateProblem: async (id: string, updateProblemRequest: UpdateProblemDto): Promise<ProblemModelResponse> => {
        return await apiController(`/problems/${id}`, "patch", updateProblemRequest);
    },
    deleteProblem: async (id: string): Promise<void> => {
        return await apiController(`/problems/${id}`, "delete");
    }
};