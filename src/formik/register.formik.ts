import { passwordValidator, confirmPasswordValidator, usernameValidator } from "../utils/validator.util";
import * as yup from "yup";

export type RegisterValues = {
    username: string;
    password: string;
    confirmPassword: string;
};

export const emptyRegisterValues: RegisterValues = {
    username: "",
    password: "",
    confirmPassword: "",
};

export const RegisterValidationSchema = yup.object({
    username: usernameValidator,
    password: passwordValidator,
    confirmPassword: confirmPasswordValidator
});