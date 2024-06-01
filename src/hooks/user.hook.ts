import { store } from "../store/store";
import { UpdateUserDto } from "../dto/users.dto";
import { usersService } from "../services/users.service";
import { useDispatch } from "react-redux";
import { setAuthUser, setAvatar } from "../store/slices/auth.slice";
import {
    useMutation,
    useQuery,
} from "react-query";

export const useUser = () => {
    const dispatch = useDispatch();
    const user = store.getState().auth.user;

    const updateUserMutation = useMutation(async (userData: UpdateUserDto) => {
        const response = await usersService.updateUser(user?.id as string, userData);
        dispatch(setAuthUser(response));
        return response;
    });

    return {
        user,
        updateUserMutation,
    };
};