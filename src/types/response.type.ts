import { CompletionStatus, PublicationStatus } from "../enum/problem.enum";
import { OptimizationLevel, ProgrammingLanguage, ResultCode } from "../enum/compile-and-run.enum";
import { Role } from "../enum/roles.enum";
import { AttachmentModel } from "./problem.type";
import { CompileAndRunOutput } from "./compile-and-run.type";
import { TestcaseType } from "./testcase.type";
import { User } from "./user.type";

export interface CompileAndRunModelResponse {
    compilerOutput: string;
    compilationTime: number;
    compilationMemory: number;
    executableSize: number;
    totalExecutionTime: number;
    maxExecutionMemory: number;
    code: ResultCode;
    outputs: CompileAndRunOutput[];
}

export interface SubmissionsModelResponse {
    id: string;
    owner: User;
    problem: { id: string; title: string };
    code: string;
    language: ProgrammingLanguage;
    outputCodes: string[];
    accepted: boolean;
    compilationTime: number;
    compilationMemory: number;
    executionTime: number;
    executionMemory: number;
    createdAt: string;
}

export interface AuthModelResponse {
    token: string;
    user: UserModelResponse;
}

export interface ResetPasswordResponse {
    message: string;
}

export interface ProblemModelResponse {
    id: string;
    number: number;
    title: string;
    description: string;
    input: string;
    output: string;
    hint: string;
    hintCost: number;
    testcases: TestcaseType[];
    exampleTestcases: TestcaseType[];
    starterCode: string;
    solution: string;
    solutionLanguage: ProgrammingLanguage;
    allowedHeaders: string[];
    bannedFunctions: string[];
    timeLimit: number;
    memoryLimit: number;
    difficulty: number;
    score: number;
    optimizationLevel: OptimizationLevel;
    attachments: AttachmentModel[];
    tags: { id: string; name: string }[];
    owner: { id: string; displayName: string };
    credits: string;
    publicationStatus: PublicationStatus;
    completionStatus: CompletionStatus;
    userSolvedCount: number;
    createdAt: string;
    updatedAt: string;
}

export interface ProblemTagModelResponse {
    id: string;
    name: string;
    description: string;
    owner: { id: string; displayName: string };
    createdAt: string;
    updatedAt: string;
}

export interface SavesModelResponse {
    id: string;
    owner: { id: string; displayName: string };
    problem: { id: string; title: string };
    code: string;
    createdAt: string;
    updatedAt: string;
}

export interface GroupModelResponse {
    id: string;
    name: string;
    description: string;
    members: { id: string; displayName: string }[];
    memberCount: number;
    totalScore: number;
    uniqueTotalScore: number;
    problemSolvedCount: number;
    uniqueProblemSolvedCount: number;
    lastProblemSolvedAt: string;
    createdAt: string;
    updatedAt: string;
}

export interface UserModelResponse {
    id: string;
    email: string;
    roles: Role[];
    displayName: string;
    bio: string;
    group: { id: string; name: string } | null;
    totalScore: number;
    problemSolvedCount: number;
    lastProblemSolvedAt: string;
    lastEmailRequestedAt: string;
    createdAt: string;
    updatedAt: string;
}

export interface AttachmentModelResponse {
    id: string;
    name: string;
    type: string;
    size: number;
    url: string;
    owner: {
        id: string;
        displayName: string;
    };
    createdAt: string;
}

export interface ErrorModelResponse {
    message: any;
    statusCode: number;
    error: string;
}

export interface PaginationModelResponse<T> {
    data: T[];
    page: number;
    perPage: number;
    total: number;
}