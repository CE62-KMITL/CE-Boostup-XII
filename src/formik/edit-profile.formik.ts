import { usernameValidator } from "../utils/validator.util";
import * as yup from "yup";

export type EditProfileValues = {
    username: string;
};

export const emptyEditProfileValues: EditProfileValues = {
    username: "",
};

export const EditProfileValidationSchema = yup.object({
    username: usernameValidator,
});