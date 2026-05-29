import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";



export default function DashboardLayout(){
    return(
    <>

    <div className="flex min-h-screen overflow-hidden bg-amber-50">
        <Sidebar />

        <div className="flex-1 flex flex-col h-full overflow-y-auto">
            <main className="p-6 wfull max-w-7xl flex-1">
                <Outlet />
            </main>
        </div>
    </div>   

    </>
    )
}