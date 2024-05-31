import { passwordValidator, confirmPasswordValidator } from "../utils/validator.util";
import * as yup from "yup";

export type ResetPasswordValues = {
    password: string;
    confirmPassword: string;
};

export const emptyResetPasswordValues: ResetPasswordValues = {
    password: "",
    confirmPassword: "",
};

export const ResetPasswordValidationSchema = yup.object({
    password: passwordValidator,
    confirmPassword: confirmPasswordValidator
});