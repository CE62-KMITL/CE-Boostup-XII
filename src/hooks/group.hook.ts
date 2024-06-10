import { GroupModelResponse } from "../types/response.type";
import { groupsService } from "../services/groups.service";
import { useAppSelector, useAppDispatch } from "../store/hook";
import { setGroup } from "../store/slices/auth.slice";
import {
    useQuery,
    UseQueryOptions
} from "react-query";
import { useUser } from "./user.hook";

const GROUP_QUERY_KEY = "group";

export const useGroup = (options?: UseQueryOptions<GroupModelResponse>) => {
    const { user } = useUser();
    const dispatch = useAppDispatch();

    const fetchGroup = async (): Promise<GroupModelResponse> => {
        const groupId = user?.group?.id as string;
        const response = await groupsService.getGroup(groupId);
        dispatch(setGroup(response));
        return response
    };

    const { data: group, isLoading } = useQuery<GroupModelResponse>(GROUP_QUERY_KEY, fetchGroup, {
            ...options,
            enabled: !!useAppSelector((state) => state.auth.accessToken),
        }
    );

    const getAvatar = (groupId?: string) => `${import.meta.env.VITE_PUBLIC_ENV}/groups/${groupId}/avatar`;

    return {
        group,
        isLoading,
        getAvatar,
    };
};