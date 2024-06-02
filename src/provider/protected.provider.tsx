import { Role } from "../enum/roles.enum";
import { useLocation, Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useUser } from "../hooks/user.hook";

type ProtectedProviderProps = {
    allowedRoles: Role[];
}

export function ProtectedProvider({ allowedRoles }: ProtectedProviderProps) {
    const location = useLocation();
    const { user } = useUser();
    const userRoles = user?.roles;

    const isAllowed = userRoles?.some((role) => allowedRoles.includes(role));

    return isAllowed ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
}