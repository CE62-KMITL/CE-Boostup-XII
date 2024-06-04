import { passwordValidator, confirmPasswordValidator, oldPasswordValidator } from "../utils/validator.util";
import * as yup from "yup";

export type ChangePasswordValues = {
    oldPassword: string;
    password: string;
    confirmPassword: string;
};

export const emptyChangePasswordValues: ChangePasswordValues = {
    oldPassword: "",
    password: "",
    confirmPassword: "",
};

export const ChangePasswordValidationSchema = yup.object({
    oldPassword: oldPasswordValidator,
    password: passwordValidator,
    confirmPassword: confirmPasswordValidator
});