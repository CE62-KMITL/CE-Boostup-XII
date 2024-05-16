import { apiController } from "../controllers/api.controller";
import { LoginDto, RegisterDto, ResetPasswordDto, RequestPasswordResetDto } from "../dto/auth.dto";
import { AuthModelResponse, ResetPasswordResponse } from "../types/response.type";

export const authService = {
  login: async (loginRequest: LoginDto): Promise<AuthModelResponse> => {
    return await apiController("/auth/login", "post", loginRequest);
  },
  register: async (
    registerRequest: RegisterDto,
  ): Promise<AuthModelResponse> => {
    return await apiController("/auth/register", "post", registerRequest);
  },
  resetPassword: async (resetPasswordRequest: ResetPasswordDto): Promise<ResetPasswordResponse> => {
    return await apiController("/auth/reset-password", "post", resetPasswordRequest);
  },
  requestPasswordReset: async (requestPasswordResetRequest: RequestPasswordResetDto): Promise<ResetPasswordResponse> => {
    return await apiController("/auth/request-password-reset", "post", requestPasswordResetRequest);
  }
};