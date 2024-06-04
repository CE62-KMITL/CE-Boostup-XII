import { SavesModelResponse, PaginationModelResponse } from "../types/response.type";
import { PaginationRequestDto } from "../dto/utils.dto";
import { apiController } from "../controllers/api.controller";
import { CreateSaveDto, UpdateSaveDto } from "../dto/saves.dto";

export const savesService = {
    async getSaves(paginationRequest: PaginationRequestDto): Promise<PaginationModelResponse<SavesModelResponse>> {
        return await apiController("/saves", "get", undefined, paginationRequest);
    },
    async getSave(id: string): Promise<SavesModelResponse> {
        return await apiController(`/saves/${id}`, "get");
    },
    async createSave(createSaveRequest: CreateSaveDto): Promise<SavesModelResponse> {
        return await apiController(`/saves`, "post", createSaveRequest);
    },
    async updateSave(id: string, updateSaveRequest: UpdateSaveDto): Promise<SavesModelResponse> {
        return await apiController(`/saves/${id}`, "patch", updateSaveRequest);
    },
    async deleteSave(id: string): Promise<void> {   
        return await apiController(`/saves/${id}`, "delete");
    },
    async getSaveForProblem(problemId: string): Promise<SavesModelResponse> {
        return await apiController(`/saves/for-problem/${problemId}`, "get");
    },
};