import { savesService } from "../services/saves.service";
import { CreateSaveDto, UpdateSaveDto } from "../dto/saves.dto";
import { SavesModelResponse } from "../types/response.type";
import {
    UseQueryOptions,
    useMutation,
    useQuery,
} from "react-query";
import { useCompilerSettingStore } from "../store/zustand/compiler-setting.zustand";
import { useEffect } from "react";
import { useProblemStore } from "../store/zustand/problem.zustand";

const SAVES_QUERY_KEY = "saves";

export const useSaves = (problemId: string, options?: UseQueryOptions<SavesModelResponse>) => {
    const { setCode } = useCompilerSettingStore();
    const { problem } = useProblemStore();

    const fetchSaves = async (): Promise<SavesModelResponse> => {
        return await savesService.getSaveForProblem(problemId);
    };

    const savesQuery = useQuery<SavesModelResponse>(SAVES_QUERY_KEY, fetchSaves, {
        ...options,
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        if (savesQuery.data) {
            const saveCode = savesQuery.data.code;
            setCode(saveCode);
        } else
            setCode(problem?.starterCode as string);
    }, [savesQuery.data]);

    const createSaveMutation = useMutation(async (createSaveDto: CreateSaveDto) => {
        const response = await savesService.createSave(createSaveDto);
        return response;
    });

    const updateSaveMutation = useMutation(async ({ saveId, updateSaveRequest }: { saveId: string, updateSaveRequest: UpdateSaveDto }) => {
        const response = await savesService.updateSave(saveId, updateSaveRequest);
        return response;
    });


    return {
        createSaveMutation,
        updateSaveMutation,
        savesQuery,
    };
};