import { apiController } from "../controllers/api.controller";
import { LoginDto, RegisterDto, ResetPasswordDto, RequestPasswordResetDto, RequestAccountCreationDto } from "../dto/auth.dto";
import { AuthModelResponse, ResetPasswordResponse } from "../types/response.type";

export const authService = {
  login: async (loginRequest: LoginDto): Promise<AuthModelResponse> => {
    return await apiController("/auth/login", "post", loginRequest);
  },
  register: async (registerRequest: RegisterDto): Promise<{ massage: string }> => {
    return await apiController("/auth/create-account", "post", registerRequest);
  },
  resetPassword: async (resetPasswordRequest: ResetPasswordDto): Promise<ResetPasswordResponse> => {
    return await apiController("/auth/reset-password", "post", resetPasswordRequest);
  },
  requestPasswordReset: async (requestPasswordResetRequest: RequestPasswordResetDto): Promise<ResetPasswordResponse> => {
    return await apiController("/auth/request-password-reset", "post", requestPasswordResetRequest);
  },
  requestAccountCreation: async (requestAccountCreationRequest: RequestAccountCreationDto): Promise<ResetPasswordResponse> => {
    return await apiController("/auth/request-account-creation", "post", requestAccountCreationRequest);
  }
};