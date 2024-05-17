import { Role } from "../enum/roles.enum";
import { useLocation, Navigate } from "react-router-dom";
import { store } from "../store/store";
import { Outlet } from "react-router-dom";

type RouteControllerProps = {
    allowedRoles: Role[];
}

export function RouteController({ allowedRoles }: RouteControllerProps) {
    const location = useLocation();
    const userRoles = store.getState().auth.user?.roles;
    const accessToken = store.getState().auth.accessToken;

    const isAllowed = userRoles?.some((role) => allowedRoles.includes(role)) && accessToken;

    return isAllowed ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
}