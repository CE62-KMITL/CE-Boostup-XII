import { useLocation, Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useUser } from "../hooks/user.hook";
import { useEffect } from "react";

export default function VerifyProvider() {
    const location = useLocation();
    const { user } = useUser();

    return !user ? <Outlet /> : <Navigate to="/home/1" state={{ from: location }} replace />;
}