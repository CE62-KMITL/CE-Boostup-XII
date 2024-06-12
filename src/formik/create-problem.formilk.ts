import { requiredValidator } from "../utils/validator.util";
import * as yup from "yup";

export type CreateProblemValues = {
    title: string;
    description: string;
    hint: string;
    hintCost: string;
    input: string;
    output: string;
    solution: string;
    starterCode: string;
    bannedFunctions: string;
};

export const emptyCreateProblemValues: CreateProblemValues = {
    title: "",
    description: "",
    hint: "",
    hintCost: "",
    input: "",
    output: "",
    solution: "",
    starterCode: "",
    bannedFunctions: "",
};

export const CreateProblemValidationSchema = yup.object({
    title: requiredValidator,
    description: requiredValidator,
    hint: requiredValidator,
    hintCost: requiredValidator,
    input: requiredValidator,
    output: requiredValidator,
    solution: requiredValidator,
    starterCode: requiredValidator,
    bannedFunctions: requiredValidator,
});