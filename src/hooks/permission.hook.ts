import { Role } from "../enum/roles.enum"
import { useUser } from "./user.hook";

export const usePermission = (allowedRoles: Role[]) => {
    const { user } = useUser();
    const userRoles = user?.roles;

    return userRoles?.some((role) => allowedRoles.includes(role));
};