import { submissionsService } from "../../services/submissions.service"
import { useMutation } from "react-query"
import { CreateSubmissionDto } from "../../dto/submissions.dto"

export const useSubmission = () => {
    const createSubmissionMutation = useMutation(async (createSubmissionRequest: CreateSubmissionDto) => {
        const response = await submissionsService.createSubmission(createSubmissionRequest)
        return response
    });

    return {
        createSubmissionMutation
    }
}