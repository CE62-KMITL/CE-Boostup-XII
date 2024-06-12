import { UpdateUserDto } from "../dto/users.dto";
import { usersService } from "../services/users.service";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { setAuthUser } from "../store/slices/auth.slice";
import {
    useMutation,
    useQuery,
} from "react-query";
import { useProblemStore } from "../store/zustand/problem.zustand";

const USER_QUERY_KEY = "user";

export const useUser = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.auth.user);
    const { problem } = useProblemStore();

    const updateUserMutation = useMutation(async (userData: UpdateUserDto) => {
        const response = await usersService.updateUser(user?.id as string, userData);
        dispatch(setAuthUser(response));
        return response;
    });

    const getSelfQuery = useQuery(USER_QUERY_KEY, usersService.getSelf);

    const getAvatar = (userId?: string) => `${import.meta.env.VITE_PUBLIC_ENV}/users/${userId}/avatar`;

    const isOwner = user?.id === problem?.owner.id;

    return {
        user,
        updateUserMutation,
        getSelfQuery,
        getAvatar,
        isOwner,
    };
};