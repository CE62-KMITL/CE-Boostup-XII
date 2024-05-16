import { CompletionStatus, ProgrammingLanguage, OptimizationLevel, PublicationStatus } from "../enum/problem.enum";
import { Role } from "../enum/roles.enum";
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

export interface ProblemTagModelResponse {
    id: string;
    name?: string;
    description?: string;
    owner?: { id: string; displayName: string };
    createdAt?: Date;
    updatedAt?: Date;
}

export interface SavesResponse {
    id: string;
    owner?: { id: string; displayName: string };
    problem?: { id: string; title: string };
    code?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface GroupResponse {
    id: string;
    name?: string;
    description?: string;
    members?: { id: string; displayName: string }[];
    memberCount?: number;
    totalScore?: number;
    uniqueTotalScore?: number;
    problemSolvedCount?: number;
    uniqueProblemSolvedCount?: number;
    lastProblemSolvedAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UserResponse {
    id: string;
    email?: string;
    roles?: Role[];
    displayName?: string;
    bio?: string;
    group?: { id: string; name: string } | null;
    totalScore?: number;
    problemSolvedCount?: number;
    lastProblemSolvedAt?: Date;
    lastEmailRequestedAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface PaginationModelResponse<T> {
    data: T[];
    page: number;
    perPage: number;
    total: number;
}