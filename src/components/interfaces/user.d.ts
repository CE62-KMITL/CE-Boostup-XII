import { ERole } from "../enum/role";

export default interface IUser {
    id?: string;
    email?: string;
    roles?: Role[];
    displayName?: string;
    bio?: string;
    group?: Group;
    totalScore?: number;
    problemSolvedCount?: number;
    lastProblemSolvedAt?: Date;
    lastEmailRequestedAt?: Date;
}