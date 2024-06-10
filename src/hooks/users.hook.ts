import { PaginationModelResponse, UserModelResponse } from "../types/response.type"
import { usersService } from "../services/users.service"
import {
    UseQueryOptions,
    useQuery,
} from "react-query"
import { useUsersStore } from "../store/zustand/users.zustand"
import { useEffect } from "react"

const USERS_QUERY_KEY = "users";

export const useUsers = (options?: UseQueryOptions<PaginationModelResponse<UserModelResponse>>) => {
    const { setUsers } = useUsersStore();

    const fetchUsers = async (): Promise<PaginationModelResponse<UserModelResponse>> => {
        return await usersService.getUsers({ page: 1, perPage: 10, sort: "totalScore" });
    }

    const { data: users, isLoading, error } = useQuery<PaginationModelResponse<UserModelResponse>>(USERS_QUERY_KEY, fetchUsers, {
        ...options,
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        if (users)
            setUsers(users.data.reverse());
    }, [users]);

    return {
        users,
        isLoading,
        error,
    }
}