import { Role } from "../enum/roles.enum";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { store } from "../store/store";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { usersService } from "../services/users.service";

type ProtectedProviderProps = {
    allowedRoles: Role[];
}

export function ProtectedProvider({ allowedRoles }: ProtectedProviderProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const userRoles = store.getState().auth.user?.roles;
    const userId = store.getState().auth.user?.id;

    async function fetchUser() {
        try {
            if (!userId) 
                return navigate("/");
            await usersService.getUser(userId);
        } catch (error) {
            return navigate("/");
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    const isAllowed = userRoles?.some((role) => allowedRoles.includes(role));

    return isAllowed ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
}