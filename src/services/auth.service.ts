import { apiController } from "../controllers/api.controller";
import { LoginDto, RegisterDto } from "../dto/auth.dto";

export const authService = {
  login: async (loginRequest: LoginDto): Promise<void> => {
    return await apiController("/auth/login", "post", loginRequest);
  },
  register: async (
    registerRequest: RegisterDto,
  ): Promise<void> => {
    return await apiController("/auth/register", "post", registerRequest);
  },
};
