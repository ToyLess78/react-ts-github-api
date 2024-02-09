import {Navigation} from "./Navigation.tsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}

export default Layout