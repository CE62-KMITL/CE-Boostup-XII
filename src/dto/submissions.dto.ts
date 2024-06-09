import { ProgrammingLanguage } from "../enum/compile-and-run.enum";

export type CreateSubmissionDto = {
    code: string;
    language: ProgrammingLanguage;
    problem: string;
};

export type UpdateSubmissionDto = {

};