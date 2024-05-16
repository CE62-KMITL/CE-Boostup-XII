import { CompletionStatus, ProgrammingLanguage, OptimizationLevel, PublicationStatus } from "../enum/problem.enum";
import { AttachmentModel } from "./problem.type";

export interface AuthModelResponse {
    token: string;
}

export interface ResetPasswordResponse {
    message: string;
}

export interface ProblemModelResponse {
    id: string;
    number?: number;
    title?: string;
    description?: string;
    input?: string;
    output?: string;
    hint?: string;
    hintCost?: number;
    testcases?: { input: string; output: string }[];
    exampleTestcases?: { input: string; output: string }[];
    starterCode?: string;
    solution?: string;
    solutionLanguage?: ProgrammingLanguage;
    allowedHeaders?: string[];
    bannedFunctions?: string[];
    timeLimit?: number;
    memoryLimit?: number;
    difficulty?: number;
    score?: number;
    optimizationLevel?: OptimizationLevel;
    attachments?: AttachmentModel[];
    tags?: { id: string; name: string }[];
    owner?: { id: string; displayName: string };
    credits?: string;
    publicationStatus?: PublicationStatus;
    completionStatus?: CompletionStatus;
    userSolvedCount?: number;
    createdAt?: Date;
    updatedAt?: Date;
}