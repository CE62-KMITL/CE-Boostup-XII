import { CompletionStatus } from "../enum/problem.enum";

export interface AttachmentModel {
    id: string;
    name: string;
    type: string;
    size: number;
    url: string;
}

export interface CommonProblemModel {
    number: number;
    title: string;
    tags: { id: string; name: string }[];
    difficulty: number;
    score: number;
    userSolvedCount: number;
    completionStatus: CompletionStatus;
}