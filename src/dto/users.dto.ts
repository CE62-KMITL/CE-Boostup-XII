import { Role } from "../enum/roles.enum";

export type CreateUserDto = {
    displayName: string;
    email: string;
    roles: Role[];
    group: string;
}

export type UpdateUserDto = {
    displayName?: string;
    email?: string;
    roles?: Role[];
    group?: string;
    bio?: string;
    avatar?: string;
    password?: string;
    oldPassword?: string;
}