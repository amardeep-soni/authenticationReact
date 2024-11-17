import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-slate-800 flex justify-center items-center">
            <Outlet />
        </div>
    );
};

export default MainLayout;