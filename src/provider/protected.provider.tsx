import { Role } from "../enum/roles.enum";
import { useLocation, Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useUser } from "../hooks/user.hook";
import { Cookies } from "react-cookie";
import { useEffect } from "react";
import { useAuth } from "../hooks/auth.hook";

type ProtectedProviderProps = {
    allowedRoles: Role[];
}

export default function ProtectedProvider({ allowedRoles }: ProtectedProviderProps) {
    const location = useLocation();
    const { user, getSelfQuery } = useUser();
    const { logout } = useAuth();
    
    const cookies = new Cookies();
    const userRoles = user?.roles;

    const isAllowed = userRoles?.some((role) => allowedRoles.includes(role)) && cookies.get('token');

    useEffect(() => {
        if (!isAllowed) {
            cookies.remove('token');
            logout();
        }
        if (cookies.get('token')) {
            if ((getSelfQuery.error as Response).status === 401) {
                cookies.remove('token');
                logout();
            }
        }
    }, [isAllowed, cookies.get('token')]);

    return isAllowed ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
}