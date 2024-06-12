import { PaginationModelResponse, GroupModelResponse } from "../types/response.type"
import { groupsService } from "../services/groups.service"
import {
    UseQueryOptions,
    useQuery,
} from "react-query"
import { useGroupsStore } from "../store/zustand/groups.zustand"
import { useEffect } from "react"

const GROUPS_QUERY_KEY = "groups";

export const useGroups = (options?: UseQueryOptions<PaginationModelResponse<GroupModelResponse>>) => {
    const { setGroups } = useGroupsStore();

    const fetchGroups = async (): Promise<PaginationModelResponse<GroupModelResponse>> => {
        return await groupsService.getGroups({ page: 1, perPage: 25, sort: "totalScore" });
    }

    const { data: groups, isLoading, error } = useQuery<PaginationModelResponse<GroupModelResponse>>(GROUPS_QUERY_KEY, fetchGroups, {
        ...options,
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        if (groups)
            setGroups(groups.data);
    }, [groups]);

    return {
        groups,
        isLoading,
        error,
    }
}