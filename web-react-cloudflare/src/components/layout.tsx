import Navbar from "./navbvar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return(
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}