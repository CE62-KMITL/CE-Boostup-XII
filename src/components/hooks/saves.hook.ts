import { savesService } from "../../services/saves.service";
import { CreateSaveDto, UpdateSaveDto } from "../../dto/saves.dto";
import { SavesModelResponse } from "../../types/response.type";
import {
    UseQueryOptions,
    useMutation,
    useQuery,
} from "react-query";

const SAVES_QUERY_KEY = "saves";

export const useSaves = (problemId: string, options?: UseQueryOptions<SavesModelResponse>) => {
    const fetchSaves = async (): Promise<SavesModelResponse> => {
        return await savesService.getSaveForProblem(problemId);
    };

    const createSaveMutation = useMutation(async (createSaveDto: CreateSaveDto) => {
        const response = await savesService.createSave(createSaveDto);
        return response;
    });

    const updateSaveMutation = useMutation(async ({ saveId, updateSaveRequest }: { saveId: string, updateSaveRequest: UpdateSaveDto }) => {
        const response = await savesService.updateSave(saveId, updateSaveRequest);
        return response;
    });

    const savesQuery = useQuery<SavesModelResponse>(SAVES_QUERY_KEY, fetchSaves, {
        ...options,
        refetchOnWindowFocus: false,
    });

    return {
        createSaveMutation,
        updateSaveMutation,
        savesQuery,
    };
};