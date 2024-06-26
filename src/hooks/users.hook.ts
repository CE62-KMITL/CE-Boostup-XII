import { PaginationModelResponse, UserModelResponse } from "../types/response.type"
import { usersService } from "../services/users.service"
import {
    UseQueryOptions,
    useQuery,
} from "react-query"
import { useUsersStore } from "../store/zustand/users.zustand"
import { useEffect } from "react"
import { Role } from "../enum/roles.enum"
import { usePaginationRequestStore } from "../store/zustand/pagination.zustand"

const USERS_QUERY_KEY = "users";
const ROLE_USERS_QUERY_KEY = "roleUsers";

export const useUsers = (options?: UseQueryOptions<PaginationModelResponse<UserModelResponse>>) => {
    const { paginationRequest } = usePaginationRequestStore();
    const { setUsers, setRoleUsers } = useUsersStore();

    const fetchUsers = async (): Promise<PaginationModelResponse<UserModelResponse>> => {
        return await usersService.getUsers({ page: 1, perPage: 25, sort: "-totalScore" });
    }

    const fetchRoleUser = async (): Promise<PaginationModelResponse<UserModelResponse>> => {
        const response = await usersService.getUsers({ page: 1, perPage: 100, roles: Role.User, sort: "-totalScore" });
        setRoleUsers(response.data);
        return response;
    }

    const { data: users, isLoading, error } = useQuery<PaginationModelResponse<UserModelResponse>>(USERS_QUERY_KEY, fetchUsers, {
        ...options,
        refetchOnWindowFocus: false,
    });

    const roleUserQuery = useQuery<PaginationModelResponse<UserModelResponse>>([ROLE_USERS_QUERY_KEY, paginationRequest], fetchRoleUser, {
        ...options,
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        if (users)
            setUsers(users.data);
    }, [users]);

    useEffect(() => {
        if (roleUserQuery.data)
            setRoleUsers(roleUserQuery.data.data);
    }, [roleUserQuery.data]);

    useEffect(() => {
        setRoleUsers([]);
    }, []);

    return {
        users,
        isLoading,
        error,
        roleUserQuery,
    }
}