import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import '../css/app.css';

export const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className="page">
                <Outlet />
            </div>
        </div>
    )
}