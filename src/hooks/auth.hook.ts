import { LoginDto, RegisterDto, RequestPasswordResetDto, RequestAccountCreationDto, ResetPasswordDto } from "../dto/auth.dto";
import { authService } from "../services/auth.service";
import { usersService } from "../services/users.service";
import { setAuthUser, setAuthAccessToken, deleteAuthState } from "../store/slices/auth.slice";
import { useDispatch } from "react-redux";
import { UserModelResponse } from "../types/response.type";
import { store } from "../store/store";
import {
    UseQueryOptions,
    useMutation,
    useQuery,
    useQueryClient,
} from "react-query";

const AUTH_USER_QUERY_KEY = "auth";

export const useAuth = (options?: UseQueryOptions<UserModelResponse>) => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();

    const fetchAuthUser = async (): Promise<UserModelResponse> => {
        return await usersService.getSelf();
    };

    const registerMutation = useMutation(async (registerRequest: RegisterDto) => {
        const response = await authService.register(registerRequest);
        return response;
    });

    const {
        data: user,
        isLoading,
        error,
    } = useQuery<UserModelResponse>(AUTH_USER_QUERY_KEY, fetchAuthUser, {
        ...options,
        enabled: !!store.getState().auth.accessToken,
    });

    const loginMutation = useMutation(async (loginRequest: LoginDto) => {
        const response = await authService.login(loginRequest);
        dispatch(setAuthUser(response.user));
        dispatch(setAuthAccessToken(response.token));
        queryClient.invalidateQueries(AUTH_USER_QUERY_KEY);
        return response;
    });

    const requestResetPasswordMutation = useMutation(async (requestPasswordResetRequest: RequestPasswordResetDto) => {
        return await authService.requestPasswordReset(requestPasswordResetRequest);
    });

    const createAccountMutation = useMutation(async (requestAccountCreationRequest: RequestAccountCreationDto) => {
        return await authService.requestAccountCreation(requestAccountCreationRequest);
    });

    const resetPasswordMutation = useMutation(async (resetPasswordRequest: ResetPasswordDto) => {
        return await authService.resetPassword(resetPasswordRequest);
    });

    const logout = () => {
        dispatch(deleteAuthState());
    }

    return {
        user,
        isLoading,
        error,
        loginMutation,
        registerMutation,
        requestResetPasswordMutation,
        createAccountMutation,
        resetPasswordMutation,
        logout,
    };
};