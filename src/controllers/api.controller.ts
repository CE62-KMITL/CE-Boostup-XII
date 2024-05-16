import { LoginDto, RegisterDto, ResetPasswordDto, RequestPasswordResetDto } from "../dto/auth.dto";
import { PaginationRequestDto } from "../dto/problem.dto";
import axiosInstance from "../services/api.service";

export async function apiController<T>(
  url: string,
  method: "get" | "post" | "put" | "patch" | "delete",
  data?: LoginDto | RegisterDto | ResetPasswordDto | RequestPasswordResetDto,
  params?: PaginationRequestDto
): Promise<T> {
  try {
    const response = await axiosInstance.request({ url, method, data, params });
    return response.data;
  } catch (error) {
    const message = (error as Error).message;
    return Promise.reject(message);
  }
}