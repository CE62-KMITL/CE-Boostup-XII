import { CreateAttachmentDto } from "../dto/attachments.dto"
import { AttachmentModelResponse } from "../types/response.type"
import {
    useMutation,
    useQuery,
    UseQueryOptions
} from "react-query"
import { attachmentsService } from "../services/attachments.service"

const ATTACHMENT_QUERY_KEY = 'attachment'

export const useAttachment = (attachmentId?: string, options?: UseQueryOptions<AttachmentModelResponse | undefined>) => {
    const fetchAttachment = async () => {
        if (attachmentId)
            return await attachmentsService.getAttachment(attachmentId)
    }

    const { data: attachment, isLoading } = useQuery<AttachmentModelResponse | undefined>([ATTACHMENT_QUERY_KEY], fetchAttachment, {
        ...options,
        enabled: !!attachmentId,
    })

    const createAttachmentMutation = useMutation(async (attachmentRequest: CreateAttachmentDto) => {
        return await attachmentsService.createAttachment(attachmentRequest);
    });

    return {
        createAttachmentMutation,
        attachment,
        isLoading,
    }
}