import { Outlet } from "react-router-dom"
import NavBar from "../components/utils/NavBar"

export default function InitLayout() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}