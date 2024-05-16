import { emailValidator, passwordValidator } from "../../utils/validator.util";
import * as yup from "yup";

export type LoginValues = {
  email: string;
  password: string;
};

export const emptyLoginValues: LoginValues = {
  email: "",
  password: "",
};

export const loginValidationSchema = yup.object({
  email: emailValidator,
  password: passwordValidator,
});