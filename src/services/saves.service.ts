import { SavesResponse, PaginationModelResponse } from "../types/response.type";
import { PaginationRequestDto } from "../dto/utils.dto";
import { apiController } from "../controllers/api.controller";
import { CreateSaveDto, UpdateSaveDto } from "../dto/saves.dto";

export const savesService = {
    async getSaves(paginationRequest: PaginationRequestDto): Promise<PaginationModelResponse<SavesResponse>> {
        return await apiController("/saves", "get", undefined, paginationRequest);
    },
    async getSave(id: string): Promise<SavesResponse> {
        return await apiController(`/saves/${id}`, "get");
    },
    async createSave(id: string, createSaveRequest: CreateSaveDto): Promise<SavesResponse> {
        return await apiController(`/saves/${id}`, "post", createSaveRequest);
    },
    async updateSave(id: string, updateSaveRequest: UpdateSaveDto): Promise<SavesResponse> {
        return await apiController(`/saves/${id}`, "patch", updateSaveRequest);
    },
    async deleteSave(id: string): Promise<void> {   
        return await apiController(`/saves/${id}`, "delete");
    }
};