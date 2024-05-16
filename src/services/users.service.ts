import { apiController } from "../controllers/api.controller"
import { CreateUserDto, UpdateUserDto } from "../dto/users.dto"
import { UserModelResponse, PaginationModelResponse } from "../types/response.type"
import { PaginationRequestDto } from "../dto/utils.dto"

export const usersService = {
    async getUsers(paginationRequest: PaginationRequestDto): Promise<PaginationModelResponse<UserModelResponse>> {
        return await apiController("/users", "get", undefined, paginationRequest)
    },
    async getUser(id: string): Promise<UserModelResponse> {
        return await apiController(`/users/${id}`, "get")
    },
    async getAvatar(id: string): Promise<UserModelResponse> {
        return await apiController(`/users/${id}/avatar`, "get")
    },
    async createUser(createUserRequest: CreateUserDto): Promise<UserModelResponse> {
        return await apiController("/users", "post", createUserRequest)
    },
    async updateUser(id: string, updateUserRequest: UpdateUserDto): Promise<UserModelResponse> {
        return await apiController(`/users/${id}`, "patch", updateUserRequest)
    },
    async deleteUser(id: string): Promise<void> {
        return await apiController(`/users/${id}`, "delete")
    }
}