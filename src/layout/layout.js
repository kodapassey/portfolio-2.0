import { Sidebar } from "../components/Sidebar";
import { Banner } from "../components/Banner";

export const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <Banner />
        </div>
    )
}