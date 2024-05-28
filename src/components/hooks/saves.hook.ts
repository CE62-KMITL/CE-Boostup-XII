import { savesService } from "../../services/saves.service";
import { PaginationRequestDto } from "../../dto/utils.dto";
import { SavesModelResponse, PaginationModelResponse } from "../../types/response.type";
import {
    UseQueryOptions,
    useMutation,
    useQuery,
    useQueryClient,
} from "react-query";

const SAVES_QUERY_KEY = "saves";

export const useSaves = (paginationRequest: PaginationRequestDto, options?: UseQueryOptions<PaginationModelResponse<SavesModelResponse>>) => {
    const queryClient = useQueryClient();

    const fetchSave = async (): Promise<PaginationModelResponse<SavesModelResponse>> => {
        return await savesService.getSaves(paginationRequest);
    };

    const createSaveMutation = useMutation(savesService.createSave, {
        onSuccess: () => {
            queryClient.invalidateQueries(SAVES_QUERY_KEY);
        },
    });

    const {
        data: saves,
        isLoading,
        error,
    } = useQuery<PaginationModelResponse<SavesModelResponse>>(SAVES_QUERY_KEY, fetchSave, {
        ...options,
        refetchOnWindowFocus: false,
    });

    return {
        createSaveMutation,
        saves,
        isLoading,
        error,
    };
};