import { CreateGroupDto, UpdateGroupDto } from "../dto/groups.dto";
import { GroupModelResponse, PaginationModelResponse } from "../types/response.type";
import { PaginationRequestDto } from "../dto/utils.dto";
import { apiController } from "../controllers/api.controller";

export const groupsService = {
    async getGroups(paginationRequest: PaginationRequestDto): Promise<PaginationModelResponse<GroupModelResponse>> {
        return await apiController("/groups", "get", undefined, paginationRequest);
    },
    async getGroup(id: string): Promise<GroupModelResponse> {
        return await apiController(`/groups/${id}`, "get");
    },
    async createGroup(createGroupRequest: CreateGroupDto): Promise<GroupModelResponse> {
        return await apiController("/groups", "post", createGroupRequest);
    },
    async updateGroup(id: string, updateGroupRequest: UpdateGroupDto): Promise<GroupModelResponse> {
        return await apiController(`/groups/${id}`, "patch", updateGroupRequest);
    },
    async deleteGroup(id: string): Promise<void> {
        return await apiController(`/groups/${id}`, "delete");
    }
};