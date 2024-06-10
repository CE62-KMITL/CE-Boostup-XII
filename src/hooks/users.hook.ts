import { PaginationModelResponse, UserModelResponse } from "../types/response.type"
import { usersService } from "../services/users.service"
import {
    UseQueryOptions,
    useQuery,
} from "react-query"
import { useUsersStore } from "../store/zustand/users.zustand"
import { useEffect } from "react"
import { Role } from "../enum/roles.enum"

const USERS_QUERY_KEY = "users";
const ROLE_USERS_QUERY_KEY = "roleUsers";

export const useUsers = (options?: UseQueryOptions<PaginationModelResponse<UserModelResponse>>) => {
    const { setUsers, setRoleUsers } = useUsersStore();

    const fetchUsers = async (): Promise<PaginationModelResponse<UserModelResponse>> => {
        return await usersService.getUsers({ page: 1, perPage: 10, sort: "totalScore" });
    }

    const fetchRoleUser = async (): Promise<PaginationModelResponse<UserModelResponse>> => {
        return await usersService.getUsers({ page: 1, perPage: 10, sort: "totalScore", roles: Role.User });
    }

    const { data: users, isLoading, error } = useQuery<PaginationModelResponse<UserModelResponse>>(USERS_QUERY_KEY, fetchUsers, {
        ...options,
        refetchOnWindowFocus: false,
    });

    const roleUserQuery = useQuery<PaginationModelResponse<UserModelResponse>>(ROLE_USERS_QUERY_KEY, fetchRoleUser, {
        ...options,
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        if (users)
            setUsers(users.data.reverse());
    }, [users]);

    useEffect(() => {
        if (roleUserQuery.data)
            setRoleUsers(roleUserQuery.data.data.reverse());
    }, [roleUserQuery.data]);

    return {
        users,
        isLoading,
        error,
        roleUserQuery,
    }
}