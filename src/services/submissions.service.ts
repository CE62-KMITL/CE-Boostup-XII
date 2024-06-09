import { apiController } from "../controllers/api.controller"
import { CreateSubmissionDto, UpdateSubmissionDto } from "../dto/submissions.dto"
import { SubmissionsModelResponse, PaginationModelResponse } from "../types/response.type"

export const submissionsService = {
    async getSubmissions(): Promise<PaginationModelResponse<SubmissionsModelResponse>> {
        return await apiController("/submissions", "get")
    },
    async getSubmission(id: string): Promise<SubmissionsModelResponse> {
        return await apiController(`/submissions/${id}`, "get")
    },
    async createSubmission(createSubmissionRequest: CreateSubmissionDto): Promise<SubmissionsModelResponse> {
        return await apiController("/submissions", "post", createSubmissionRequest)
    },
    async updateSubmission(id: string, updateSubmissionRequest: UpdateSubmissionDto): Promise<SubmissionsModelResponse> {
        return await apiController(`/submissions/${id}`, "patch", updateSubmissionRequest)
    },
    async deleteSubmission(id: string): Promise<void> {
        return await apiController(`/submissions/${id}`, "delete")
    }
}