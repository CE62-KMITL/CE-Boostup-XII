import { Role } from "../enum/roles.enum"
import { Group } from "./group.type"

export type User = {
    id: string
    email: string
    roles: Role[]
    hashedPassword: string
    displayName: string | null
    bio: string | null
    group: Group | null;
    totalScoreOffset: number
    lastEmailRequestedAt: string | null
    avatarFilename: string | null
    createdAt: string
    updatedAt: string
}