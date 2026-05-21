import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";



export default function PublicLayout(){
    return(
        <>
        
        <div className="flex flex-col min-h-screen bg-purple-200">
            <header>
                <Navbar />
            </header>

            <div className="p-16 flex-1 w-full max-w-7xl mx-auto p-16">
                <main>
                    <Outlet />
                </main>
            </div>

        </div>
        
        
        </>

    )
}