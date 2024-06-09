import { User } from "./user.type";

export type Group = {
    id: string 
    name: string;
    description: string;
    members: User[];
    memberCount: number | null;
    totalScore: number | null;
    uniqueTotalScore: number | null;
    problemSolvedCount: number | null;
    uniqueProblemSolvedCount: number | null;
    lastProblemSolvedAt: string;
    avatarFilename: string | null;
    createdAt: string;
    updatedAt: string;
}
