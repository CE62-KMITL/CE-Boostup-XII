import { apiController } from "../controllers/api.controller"
import { PaginationRequestDto } from "../dto/problem.dto";
import { ProblemModelResponse } from "../types/response.type";  

export const problemService = {
    getProblems: async (paginationRequest: PaginationRequestDto): Promise<ProblemModelResponse[]> => {
        return await apiController("/problems", "get", undefined, paginationRequest);
    },
};