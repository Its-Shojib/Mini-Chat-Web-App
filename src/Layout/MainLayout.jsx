import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="min-h-screen max-w-screen-2xl mx-auto px-4">
            <Outlet></Outlet>
        </div>
    )
}
export default MainLayout;